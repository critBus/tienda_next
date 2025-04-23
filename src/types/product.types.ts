export interface ProductDTO {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage?: number | null;
  image: string;
  freeShipping: boolean;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}
