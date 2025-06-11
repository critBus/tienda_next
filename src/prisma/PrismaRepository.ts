import * as CategoryService from "./category";
import ProductService from "./products";
import UserService from "./users";
import TwoFactorConfirmation from "./twoFactorConfirmation";
import Account from "./account";
const PrismaRepository = {
  products: ProductService,
  categories: CategoryService,
  users: UserService,
  twoFactorConfirmation: TwoFactorConfirmation,
  account: Account,
};

export default PrismaRepository;
