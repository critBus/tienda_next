"use server";
import prisma from "@/prisma/config";
export const updateUserEmailVeried = async ({ id }: { id: string }) => {
  return await prisma.user.update({
    where: { id: id },
    data: {
      emailVerified: new Date(),
    },
  });
};
