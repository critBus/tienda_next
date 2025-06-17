"use server";

import { signIn } from "@/auth/auth";

import { LoginSchema } from "@/schemas/auth";

import { AuthError } from "next-auth";
import * as z from "zod";
import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/server/auth/tokens";
import {
  sendTwoFactorTokenEmail,
  sendVerificationEmail,
} from "@/lib/shared/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { createTempAuthToken } from "@/lib/server/auth/2faEmail";
export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, code } = validatedFields.data;
  //const existingUser = await getUserByEmail(email);
  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Confirmation email sent" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken =
        await PrismaRepository.twoFactorTokenEmail.byEmail(email);
      if (!twoFactorToken) {
        return { error: "Invalid token" };
      }
      if (twoFactorToken.token !== code) {
        return { error: "Invalid code" };
      }
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: "Code expired" };
      }
      await prisma.twoFactorTokenEmail.delete({
        where: {
          id: twoFactorToken.id,
        },
      });

      const existingConfirmation =
        await PrismaRepository.twoFactorConfirmationEmail.byUserId(
          existingUser.id
        );
      if (existingConfirmation) {
        await prisma.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }
      await prisma.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      // Guardar token en cookie HttpOnly
      await createTempAuthToken(email);

      return { twoFactor: true };
    }
  }

  try {
    console.log(`callbackUrl ${callbackUrl}`);
    // await signIn("credentials", values);
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    // console.log(error);

    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        case "AccessDenied":
          return { error: "Access Denied" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
  return { success: "Email sent" };
};
