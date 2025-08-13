"use server";
import PrismaRepository from "@/prisma/PrismaRepository";
export const getTwoFactorConfirmationByUserId = async ({
  id,
}: {
  id: string;
}) => {
  return await PrismaRepository.twoFactorConfirmationEmail.byUserId(id);
};
