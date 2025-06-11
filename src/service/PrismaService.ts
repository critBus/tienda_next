import * as CategoryService from "./prisma/category";
import ProductService from "./prisma/products";
import UserService from "./prisma/users";
import TwoFactorConfirmation from "./prisma/twoFactorConfirmation";
import Account from "./prisma/account";
const PrismaService = {
  products: ProductService,
  categories: CategoryService,
  users: UserService,
  twoFactorConfirmation: TwoFactorConfirmation,
  account: Account,
};

export default PrismaService;
