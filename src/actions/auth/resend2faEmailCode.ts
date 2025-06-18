"use server";

import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";
import { generateTwoFactorToken } from "@/lib/server/auth/tokens";
import { sendTwoFactorTokenEmail } from "@/lib/shared/mail";
import { verifyTempAuthToken } from "@/lib/server/auth/2faEmail";
import {
  MAX_RESEND_ATTEMPTS_2FA_EMAIL_CODE,
  RESEND_INTERVAL_SECONDS_2FA_EMAIL_CODE,
} from "@/config";
import { TypeAuthAction } from "@prisma/client";
export const resend2faEmailCode = async () => {
  const email = await verifyTempAuthToken();

  if (!email) {
    return { error: "No hay sesión temporal" };
  }

  // --- Lógica de Rate Limiting con la nueva tabla ---

  const tenMinutesAgo = new Date(new Date().getTime() - 10 * 60 * 1000);

  // 1. Contar los intentos de reenvío recientes
  const recentResendAttempts = await prisma.authActionLog.findMany({
    where: {
      email,
      action: TypeAuthAction.FACTOR_2FA_RESEND,
      createdAt: { gte: tenMinutesAgo },
    },
    orderBy: { createdAt: "desc" },
  });

  if (recentResendAttempts.length >= MAX_RESEND_ATTEMPTS_2FA_EMAIL_CODE) {
    return {
      error:
        "Has alcanzado el número máximo de reenvíos. Por favor, intenta iniciar sesión de nuevo más tarde.",
    };
  }

  // 2. Comprobar el tiempo desde el último reenvío
  if (recentResendAttempts.length > 0) {
    const lastAttemptTime = recentResendAttempts[0].createdAt;
    const timeSinceLastAttempt =
      (new Date().getTime() - lastAttemptTime.getTime()) / 1000;

    if (timeSinceLastAttempt < RESEND_INTERVAL_SECONDS_2FA_EMAIL_CODE) {
      const timeLeft = Math.ceil(
        RESEND_INTERVAL_SECONDS_2FA_EMAIL_CODE - timeSinceLastAttempt
      );
      return {
        error: `Por favor, espera ${timeLeft} segundos antes de solicitar otro código.`,
      };
    }
  }

  // --- Si las comprobaciones pasan, proceder ---

  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist" };
  }
  if (!existingUser.emailVerified) {
    return { error: "The email is not validated" };
  }
  await prisma.twoFactorTokenEmail.deleteMany({
    where: {
      email: email,
    },
  });

  const twoFactorToken = await generateTwoFactorToken(email);
  await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

  // ¡Importante! Registrar esta acción de reenvío en el nuevo log
  await prisma.authActionLog.create({
    data: {
      email,
      action: TypeAuthAction.FACTOR_2FA_RESEND,
    },
  });

  return { success: true };
};
