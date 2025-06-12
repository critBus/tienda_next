"use server";
import PrismaRepository from "@/prisma/PrismaRepository";
export const getTwoFactorConfirmationByUserId = async ({
  id,
}: {
  id: string;
}) => {
  return await PrismaRepository.twoFactorConfirmation.byUserId(id);
};
