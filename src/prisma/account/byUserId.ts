import prisma from "@/prisma/config";
export const byUserId = async (userId: string) => {
  try {
    return await prisma.account.findFirst({ where: { userId } });
  } catch {
    return null;
  }
};
