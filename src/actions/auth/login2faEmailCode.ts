"use server";

import { signIn } from "@/auth/auth";

import { VerificationCodeSchema } from "@/schemas/auth";

import { AuthError } from "next-auth";
import * as z from "zod";
import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";

import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { verifyTempAuthToken } from "@/lib/server/auth/2faEmail";

export const login2faEmailCode = async (
  values: z.infer<typeof VerificationCodeSchema>,
  callbackUrl?: string
) => {
  const validatedFields = VerificationCodeSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { code } = validatedFields.data;
  if (!code) {
    return { error: "Invalid fields [code]" };
  }

  const email = await verifyTempAuthToken();
  if (!email) {
    return { error: "Tu sesión ha expirado. Por favor, inténtalo de nuevo." };
  }

  //const existingUser = await getUserByEmail(email);
  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }

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

  if (twoFactorToken.used) {
    await prisma.twoFactorTokenEmail.delete({
      where: {
        id: twoFactorToken.id,
      },
    });
    return { error: "Token Used" };
  }
  await prisma.twoFactorTokenEmail.update({
    where: {
      id: twoFactorToken.id,
    },
    data: {
      used: true,
    },
  });

  // await prisma.twoFactorTokenEmail.delete({
  //   where: {
  //     id: twoFactorToken.id,
  //   },
  // });

  const existingConfirmation =
    await PrismaRepository.twoFactorConfirmationEmail.byUserId(existingUser.id);
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

  try {
    console.log(`callbackUrl ${callbackUrl}`);
    // await signIn("credentials", values);
    await signIn("2fa", {
      code,
      redirect: true,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Correct credentials" };
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
};
