"use server";
import prisma from "@/prisma/config";
import PrismaRepository from "@/prisma/PrismaRepository";
import { getTranslations } from "next-intl/server";

export const newVerification = async (token: string) => {
  const t = await getTranslations("AuthServerActions");
  const existingToken =
    await PrismaRepository.verificationTokenEmail.byToken(token);
  if (!existingToken) {
    return { error: t("tokenDoesNotExist") };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: t("tokenHasExpired") };
  }
  const existingUser = await PrismaRepository.users.byEmail(
    existingToken.email
  );
  if (!existingUser) {
    return { error: t("emailDoesNotExist") };
  }
  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });
  await prisma.verificationTokenEmail.delete({
    where: { id: existingToken.id },
  });
  return { success: t("emailVerified") };
};
