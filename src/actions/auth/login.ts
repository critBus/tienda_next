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
import { getTranslations } from "next-intl/server";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) => {
  const t = await getTranslations("AuthServerActions");
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: t("invalidFields") };
  }
  const { email, password, code } = validatedFields.data;
  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: t("emailNotFound") };
  }
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: t("confirmationEmailSent"), sendEmailVerification: true };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken =
        await PrismaRepository.twoFactorTokenEmail.byEmail(email);
      if (!twoFactorToken) {
        return { error: t("invalidToken") };
      }
      if (twoFactorToken.token !== code) {
        return { error: t("invalidCode") };
      }
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: t("codeExpired") };
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
          error: t("tooManyLoginAttempts"),
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
            error: t("waitBeforeRetry", { timeLeft }),
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
    await signIn("credentials", {
      email,
      password,
      //redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      redirect: false,
    });
    return {
      success: "Login exitoso",
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return { error: t("invalidCredentials") };
        case "AccessDenied":
          return { error: t("accessDenied") };
        default:
          return { error: t("somethingWentWrong") };
      }
    }
    throw error;
  }
  return { success: t("emailSent") };
};
