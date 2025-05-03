import { Product } from "@/types";
import prisma from "@/libs/prisma";
import { parseProducts } from "./utils";
import { FilterType } from "@/store/slices/locationSlice";
export async function byLocation(location: FilterType): Promise<Product[]> {
  const or_filter: FilterType[] = [
    { provinceId: null, municipalityId: null, townId: null },
    location,
  ];
  if (location.municipalityId && location.provinceId) {
    or_filter.push({
      provinceId: location.provinceId,
      municipalityId: null,
      townId: null,
    });
  }
  if (location.townId && location.municipalityId && location.provinceId) {
    or_filter.push({
      provinceId: location.provinceId,
      municipalityId: location.municipalityId,
      townId: null,
    });
  }
  const product_response = await prisma.product.findMany({
    where: {
      availableLocations: {
        some: {
          OR: or_filter,
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
