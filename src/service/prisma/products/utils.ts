import { Product } from "@/types";

import {
  Product as ProductPrisma,
  Price as PricePrisma,
  Currency,
  Category,
  Company,
  ProductAvailability,
} from "@/app/generated/prisma/index";
import { FilterType } from "@/store/slices/locationSlice";

interface PricePrismaResponse extends PricePrisma {
  currency: Currency;
}
interface ProductPrismaResponse extends ProductPrisma {
  Price: PricePrismaResponse[];
  category: Category;
  company: Company;
  availableLocations: ProductAvailability[];
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
  console.log("or_filter");
  console.log(or_filter);
  return or_filter;
}
