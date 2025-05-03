import { Product } from "@/types";
import prisma from "@/libs/prisma";
import { getLocationFilter, parseProducts } from "./utils";
import { FilterType } from "@/store/slices/locationSlice";

export async function bestSelling({
  location = null,
}: {
  location?: FilterType | null;
}): Promise<Product[]> {
  const products_response = await prisma.product.findMany({
    where: {
      published: true, // Solo productos publicados
      availableLocations: {
        some: {
          OR: getLocationFilter({ location }),
        },
      },
    },
    orderBy: {
      purchaseCount: "desc",
    },
    take: 10,
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
