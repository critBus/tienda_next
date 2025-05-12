import { all } from "./all";
import { bestSelling } from "./bestSelling";
import { byId } from "./byId";
import { byLocation } from "./byLocation";
import { latestAdditions } from "./latestAdditions";
import { recommended } from "./recommended";

const ProductService = {
  all,
  byId,
  byLocation,
  recommended,
  bestSelling,
  latestAdditions,
};
export default ProductService;
