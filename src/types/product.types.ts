import { CategoryDTO, CategorySerializer } from "./category.types";
import { CompanyDTO } from "./company.types";
import { MunicipalityDTO } from "./municipality.types";

// 1. Importamos el tipo original y lo renombramos

import { Price, PriceSerializer } from "./price.types";
import { ProductImageDTO } from "./productImage.types";
import { ProvinceDTO } from "./provice.types";
import { TownDTO } from "./town.types";

export interface ProductDTO {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  description: string;
  priceBaseDiscount: number | null;
  stock: number;
  ignoreStock: boolean;
  published: boolean;
  discountPercentage: number | null;
  freeShipping: boolean;
  categoryId: number;
  companyId: number;
  itsNew: boolean;
  category: CategoryDTO;
  company: CompanyDTO;
  priceBaseCurrency: number;
  brand: string | null;
}

export interface Product {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  description: string;
  priceBaseDiscount: number | null;
  stock: number;
  ignoreStock: boolean;
  published: boolean;
  discountPercentage: number | null;
  freeShipping: boolean;
  categoryId: number;
  companyId: number;
  itsNew: boolean;
  category: CategoryDTO;
  company: CompanyDTO;
  priceBaseCurrency: number;
  brand: string | null;
  Price: Price[]; // Updated to match the schema (array of Price objects)
}
// Omit<Product, "createdAt" | "updatedAt"> &
export type ProductSerializer = {
  id: number;
  name: string;
  image: string;
  description: string;
  priceBaseDiscount: number | null;
  stock: number;
  ignoreStock: boolean;
  published: boolean;
  discountPercentage: number | null;
  freeShipping: boolean;
  categoryId: number;
  companyId: number;
  itsNew: boolean;
  company: CompanyDTO;
  priceBaseCurrency: number;
  brand: string | null;

  category: CategorySerializer;
  Price: PriceSerializer[]; // Updated to match the schema (array of Price objects)
};

export interface ProductDetail extends ProductDTO {
  availableLocations: {
    province: ProvinceDTO | null;
    municipality: MunicipalityDTO | null;
    town: TownDTO | null;
  }[];
  ProductImage: ProductImageDTO[];
}
