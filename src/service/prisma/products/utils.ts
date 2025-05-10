import {
  Category,
  CurrencyDTO,
  PriceDTO,
  Product,
  ProductAvailabilityDTO,
  ProductDTO,
} from "@/types";
import prisma from "@/libs/prisma";

import { FilterType } from "@/store/slices/locationSlice";

interface PricePrismaResponse extends PriceDTO {
  currency: CurrencyDTO;
}
interface ProductPrismaResponse extends ProductDTO {
  Price: PricePrismaResponse[];
  category: Category;
  company: CurrencyDTO;
  availableLocations: ProductAvailabilityDTO[];
}

export function parseProducts(
  products_response: ProductPrismaResponse[]
): Product[] {
  const products: Product[] = products_response.map((product) => ({
    ...product,
    priceBaseCurrency: Number(product.priceBaseCurrency),
    priceBaseDiscount: Number(product.priceBaseDiscount),
    Price: product.Price.map((price) => ({
      ...price,
      value: Number(price.value),
      currency: {
        ...price.currency,
        baseRate: Number(price.currency.baseRate),
      },
    })), // Map each price in the array
  }));
  return products;
}

export function getLocationFilter({
  location = null,
}: {
  location?: FilterType | null;
}): FilterType[] {
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
  // console.log("or_filter");
  // console.log(or_filter);
  return or_filter;
}

export async function searchByLocationAndOrder({
  location = null,
  descOrder,
}: {
  location?: FilterType | null;
  descOrder: string;
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
      [descOrder]: "desc",
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
