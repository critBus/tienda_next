import * as CategoriaService from "./api/category";
import * as CurrencyService from "./api/currency";
const ApiService = {
  category: CategoriaService,
  currency: CurrencyService,
};
export default ApiService;
