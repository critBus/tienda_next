"use server";
import prisma from "@/prisma/config";
export const deleteTwoFactorConfirmationById = async ({
  id,
}: {
  id: string;
}) => {
  return await prisma.twoFactorConfirmation.delete({
    where: { id: id },
  });
};
