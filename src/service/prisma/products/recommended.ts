import { Product } from "@/types";
import prisma from "@/libs/prisma";
import { parseProducts } from "./utils";
import { FilterType } from "@/store/slices/locationSlice";

export async function recommended({
  location = null,
}: {
  location?: FilterType | null;
}): Promise<Product[]> {
  const or_filter: FilterType[] = [
    { provinceId: null, municipalityId: null, townId: null },
  ];
  if (location) {
    if (location.municipalityId || location.provinceId || location.townId) {
      or_filter.push(location);
    }

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
  }
  console.log("or_filter");
  console.log(or_filter);
  const products_response = await prisma.product.findMany({
    where: {
      published: true, // Solo productos publicados
      availableLocations: {
        some: {
          OR: or_filter,
        },
      },
    },
    orderBy: {
      recommendationScore: "desc",
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
