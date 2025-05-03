import { Product } from "@/types";
import prisma from "@/libs/prisma";
import { parseProducts } from "./utils";

export async function all(): Promise<Product[]> {
  console.log("intenta llamar a obtener los productos");
  const products_response = await prisma.product.findMany({
    include: {
      availableLocations: true,
      category: true,
      company: true,
      Price: {
        include: {
          currency: true,
        },
      },
    },
  });
  return parseProducts(products_response);
}
