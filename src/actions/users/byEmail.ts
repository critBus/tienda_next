"use server";
import PrismaRepository from "@/prisma/PrismaRepository";
export const getUserByEmail = async ({ email }: { email: string }) => {
  return await PrismaRepository.users.byEmail(email);
};
