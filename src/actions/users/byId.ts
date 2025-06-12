"use server";
import PrismaRepository from "@/prisma/PrismaRepository";
export const getUserById = async ({ id }: { id: string }) => {
  return await PrismaRepository.users.byId(id);
};
