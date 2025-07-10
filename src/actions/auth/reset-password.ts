"use server";
import { generatePasswordResetToken } from "@/lib/server/auth/tokens";
import { sendPasswordResetEmail } from "@/lib/shared/mail";
import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";

import { ResetSchema } from "@/schemas/auth";
import { getTranslations } from "next-intl/server";
import * as z from "zod";

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

export const resetPassword = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invaid email" };
  }
  const { email } = validatedFields.data;
  //   console.log(email);
  const existingUser = await PrismaRepository.users.byEmail(email);
  //   console.log(existingUser);

  if (!existingUser) {
    return { error: "Email not found" };
  }
  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset email sent" };
};
