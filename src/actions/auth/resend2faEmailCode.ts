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
import { getTranslations } from "next-intl/server";

export const resend2faEmailCode = async () => {
  const t = await getTranslations("AuthServerActions");
  const email = await verifyTempAuthToken();

  if (!email) {
    return { error: t("noTempSession"), redirectToMessage: true };
  }

  const tenMinutesAgo = new Date(new Date().getTime() - 10 * 60 * 1000);

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
      error: t("maxResendsExceeded"),
      redirectToMessage: true,
    };
  }

  if (recentResendAttempts.length > 0) {
    const lastAttemptTime = recentResendAttempts[0].createdAt;
    const timeSinceLastAttempt =
      (new Date().getTime() - lastAttemptTime.getTime()) / 1000;

    if (timeSinceLastAttempt < RESEND_INTERVAL_SECONDS_2FA_EMAIL_CODE) {
      const timeLeft = Math.ceil(
        RESEND_INTERVAL_SECONDS_2FA_EMAIL_CODE - timeSinceLastAttempt
      );
      return {
        error: t("waitBeforeResend", { timeLeft }),
      };
    }
  }

  const existingUser = await PrismaRepository.users.byEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: t("emailDoesNotExist"), redirectToMessage: true };
  }
  if (!existingUser.emailVerified) {
    return { error: t("emailNotValidated"), redirectToMessage: true };
  }
  await prisma.twoFactorTokenEmail.deleteMany({
    where: {
      email: email,
    },
  });

  const twoFactorToken = await generateTwoFactorToken(email);
  await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

  await prisma.authActionLog.create({
    data: {
      email,
      action: TypeAuthAction.FACTOR_2FA_RESEND,
    },
  });

  return { success: t("codeResent") };
};
