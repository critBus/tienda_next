import prisma from "@/libs/prisma";
import { Product, ProductDTO } from "@/types";

export async function getProducts(): Promise<Product[]> {
  console.log("intenta llamar a obtener los productos");
  const products_response: Product[] = await prisma.product.findMany({
    include: { category: true, company: true },
  });

  return products_response;
}

export async function getProductById(id: number): Promise<ProductDTO | null> {
  return prisma.product.findUnique({
    where: { id },
  });
}
