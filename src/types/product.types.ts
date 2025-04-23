import { CategoryDTO } from "./category.types";
import { CompanyDTO } from "./company.types";

export interface ProductDTO {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage?: number | null;
  image: string;
  freeShipping: boolean;
  categoryId: number;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product extends ProductDTO {
  category: CategoryDTO;
  company: CompanyDTO;
}
