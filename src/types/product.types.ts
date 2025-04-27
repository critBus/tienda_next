import { CategoryDTO } from "./category.types";
import { CompanyDTO } from "./company.types";

// 1. Importamos el tipo original y lo renombramos
import { Product as ProductPrisma } from "@/app/generated/prisma/index";
import { ProductImage } from "@/app/generated/prisma/index";
import { Province, Municipality, Town } from "@/app/generated/prisma/index";

import { Price } from "./price.types";

// 2. Creamos un alias exportable para el tipo original
export type ProductDTO = ProductPrisma;

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

export interface ProductDetail extends Product {
  availableLocations: {
    province: Province | null;
    municipality: Municipality | null;
    town: Town | null;
  }[];
  ProductImage: ProductImage[];
}
