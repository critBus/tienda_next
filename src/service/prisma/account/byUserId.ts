import prisma from "@/libs/prisma";
export const byUserId = async (userId: string) => {
  try {
    return await prisma.account.findFirst({ where: { userId } });
  } catch {
    return null;
  }
};
