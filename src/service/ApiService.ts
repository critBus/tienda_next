import * as CategoriaService from "./api/category";
import * as CurrencyService from "./api/currency";
import * as ProductService from "./api/product";
const ApiService = {
  category: CategoriaService,
  currency: CurrencyService,
  product: ProductService,
};
export default ApiService;
