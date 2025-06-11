import { Product } from "@/types";

import { FilterType } from "@/store/slices/locationSlice";
import { searchByLocationAndOrder } from "./utils";

export async function bestSelling({
  location = null,
}: {
  location?: FilterType | null;
}): Promise<Product[]> {
  return searchByLocationAndOrder({
    location,
    descOrder: "purchaseCount",
  });
}
