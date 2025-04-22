import prisma from "@/libs/prisma";

export async function getProducts() {
  console.log("intenta llamar a obtener los productos");
  return prisma.product.findMany();
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
  });
}
