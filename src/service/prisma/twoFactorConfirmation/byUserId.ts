import prisma from "@/libs/prisma";
export const byUserId = async (userId: string) => {
  try {
    const response = await prisma.twoFactorConfirmation.findUnique({
      where: {
        userId,
      },
    });
    return response;
  } catch {
    return null;
  }
};
