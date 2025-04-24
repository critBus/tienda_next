import { CategoryDTO } from "./category.types";
import { CompanyDTO } from "./company.types";

// 1. Importamos el tipo original y lo renombramos
import { Product as ProductPrisma } from "@/app/generated/prisma/index";

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
  originalPrice: number;
  stock: number;
  discountPercentage: number | null;
  freeShipping: boolean;
  categoryId: number;
  companyId: number;

  category: CategoryDTO;
  company: CompanyDTO;
  priceBaseCurrency: number;
  Price: Price[]; // Updated to match the schema (array of Price objects)
}
