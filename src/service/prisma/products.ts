import prisma from "@/libs/prisma";
import { Product, ProductDetail } from "@/types";

import {
  Product as ProductPrisma,
  Price as PricePrisma,
  Currency,
  Category,
  Company,
  ProductAvailability,
} from "@/app/generated/prisma/index";

interface FilterType {
  provinceId?: number | null;
  municipalityId?: number | null;
  townId?: number | null;
}
interface PricePrismaResponse extends PricePrisma {
  currency: Currency;
}
interface ProductPrismaResponse extends ProductPrisma {
  Price: PricePrismaResponse[];
  category: Category;
  company: Company;
  availableLocations: ProductAvailability[];
}

function parseProducts(products_response: ProductPrismaResponse[]): Product[] {
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

export async function getProducts(location: FilterType): Promise<Product[]> {
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

export async function getById(id: number): Promise<ProductDetail | null> {
  const find_product = await prisma.product.findUnique({
    where: { id: id },
    include: {
      category: true,
      company: true,
      Price: {
        include: {
          currency: true,
        },
      },
      availableLocations: {
        include: {
          province: true,
          municipality: true,
          town: true,
        },
      },
      ProductImage: true,
    },
  });
  if (!find_product) {
    return null;
  }
  const product = {
    ...find_product,
    priceBaseCurrency: Number(find_product.priceBaseCurrency),
    priceBaseDiscount: Number(find_product.priceBaseDiscount),
    Price: find_product.Price.map((price) => ({
      ...price,
      value: Number(price.value),
      currency: {
        ...price.currency,
        baseRate: Number(price.currency.baseRate),
      },
    })),
  };
  return product;
}
