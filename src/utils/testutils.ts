import prisma from "@/prisma/config";

export const clearData = async () => {
  await prisma.price.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.productAvailability.deleteMany();
  await prisma.product.deleteMany();
  await prisma.company.deleteMany();
  await prisma.category.deleteMany();
  await prisma.currency.deleteMany();
};
