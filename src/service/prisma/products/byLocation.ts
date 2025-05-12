import { Product } from "@/types";
import prisma from "@/libs/prisma";
import { getLocationFilter, parseProducts } from "./utils";
import { FilterType } from "@/store/slices/locationSlice";
export async function byLocation(location: FilterType): Promise<Product[]> {
  const product_response = await prisma.product.findMany({
    where: {
      availableLocations: {
        some: {
          OR: getLocationFilter({ location }),
        },
      },
    },
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
  return parseProducts(product_response);
}
