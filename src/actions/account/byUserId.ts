"use server";
import PrismaRepository from "@/prisma/PrismaRepository";
export const getAccountByUserId = async ({ id }: { id: string }) => {
  return await PrismaRepository.account.byUserId(id);
};
