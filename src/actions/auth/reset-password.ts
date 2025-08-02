"use server";
import { generatePasswordResetToken } from "@/lib/server/auth/tokens";
import { sendPasswordResetEmail } from "@/lib/shared/mail";

import PrismaRepository from "@/prisma/PrismaRepository";

import { getTranslations } from "next-intl/server";

export const resendResetPassword = async ({ token }: { token: string }) => {
  const t = await getTranslations("AuthServerActions");
  if (!token) {
    return { error: t("missingToken") };
  }
  const existingToken =
    await PrismaRepository.passwordResetToken.byToken(token);
  if (!existingToken) {
    return { error: t("invalidToken") };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: t("tokenHasExpired") };
  }
  const existingUser = await PrismaRepository.users.byEmail(
    existingToken.email
  );
  if (!existingUser) {
    return { error: t("userDoesNotExist") };
  }
  const email = existingUser.email;
  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset email sent" };
};
