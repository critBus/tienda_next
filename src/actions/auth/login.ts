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
import { TypeAuthAction } from "@prisma/client";
import {
  MAX_SEND_ATTEMPTS_2FA_EMAIL_LOGIN,
  SEND_INTERVAL_SECONDS_2FA_EMAIL_LOGIN,
} from "@/config";
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
      //!! Aqui se envia el email con el 2fa

      // --- Lógica de Rate Limiting para el envío inicial del código 2FA ---
      const tenMinutesAgo = new Date(new Date().getTime() - 10 * 60 * 1000);

      const recentSendAttempts = await prisma.authActionLog.findMany({
        where: {
          email,
          action: TypeAuthAction.FACTOR_2FA_SEND, // Usamos la acción para el envío inicial
          createdAt: { gte: tenMinutesAgo },
        },
        orderBy: { createdAt: "desc" },
      });

      if (recentSendAttempts.length >= MAX_SEND_ATTEMPTS_2FA_EMAIL_LOGIN) {
        return {
          error:
            "Se han realizado demasiados intentos de inicio de sesión. Por favor, inténtalo de nuevo más tarde.",
        };
      }

      if (recentSendAttempts.length > 0) {
        const lastAttemptTime = recentSendAttempts[0].createdAt;
        const timeSinceLastAttempt =
          (new Date().getTime() - lastAttemptTime.getTime()) / 1000;

        if (timeSinceLastAttempt < SEND_INTERVAL_SECONDS_2FA_EMAIL_LOGIN) {
          const timeLeft = Math.ceil(
            SEND_INTERVAL_SECONDS_2FA_EMAIL_LOGIN - timeSinceLastAttempt
          );
          return {
            error: `Por favor, espera ${timeLeft} segundos antes de intentar iniciar sesión de nuevo.`,
          };
        }
      }
      // --- Fin de la lógica de Rate Limiting ---

      const twoFactorToken = await generateTwoFactorToken(email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
      // ¡Importante! Registrar esta acción de envío en el log
      await prisma.authActionLog.create({
        data: {
          email,
          action: TypeAuthAction.FACTOR_2FA_SEND,
        },
      });
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
