import * as CategoryService from "./prisma/category";
import ProductService from "./prisma/products";

export default {
  products: ProductService,
  categories: CategoryService,
};
