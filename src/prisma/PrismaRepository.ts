import * as CategoryRepository from "./category";
import ProductRepository from "./products";
import UserRepository from "./users";
import TwoFactorConfirmationEmailRepository from "./twoFactorConfirmationEmail";
import AccountRepository from "./account";
import TwoFactorTokenEmailRepository from "./twoFactorTokenEmail";
import PasswordResetTokenRepository from "./passwordResetToken";
import VerificationTokenEmailRepository from "./verificationTokenEmail";
const PrismaRepository = {
  products: ProductRepository,
  categories: CategoryRepository,
  users: UserRepository,
  twoFactorConfirmationEmail: TwoFactorConfirmationEmailRepository,
  account: AccountRepository,
  twoFactorTokenEmail: TwoFactorTokenEmailRepository,
  passwordResetToken: PasswordResetTokenRepository,
  verificationTokenEmail: VerificationTokenEmailRepository,
};

export default PrismaRepository;
