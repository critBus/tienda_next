"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";
import prisma from "@/prisma/config";
import { NewPasswordSchema } from "@/schemas/auth";
import PrismaRepository from "@/prisma/PrismaRepository";
import { getTranslations } from "next-intl/server";
export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  const t = await getTranslations("AuthServerActions");
  if (!token) {
    return { error: t("missingToken") };
  }
  const validateFields = NewPasswordSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: t("invalidFields") };
  }
  const { password } = validateFields.data;
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
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });
  await prisma.resetPasswordTokenEmail.delete({
    where: { id: existingToken.id },
  });
  return { success: t("passwordUpdated") };
};
