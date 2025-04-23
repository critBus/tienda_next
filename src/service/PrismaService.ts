import * as ProductService from "./prisma/products";
import * as CategoryService from "./prisma/category";

export default {
  products: ProductService,
  categories: CategoryService,
};
