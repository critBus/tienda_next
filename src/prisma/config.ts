import { PrismaClient } from "@prisma/client";

const globalWithPrisma = globalThis as typeof globalThis & {
  prisma: PrismaClient | undefined;
};

const prisma = globalWithPrisma.prisma || new PrismaClient();

if (process.env.NODE !== "production") {
  globalWithPrisma.prisma = prisma;
}

export default prisma;
