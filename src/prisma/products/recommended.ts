import { Product } from "@/types";

import { searchByLocationAndOrder } from "./utils";
import { FilterType } from "@/store/slices/locationSlice";

export async function recommended({
  location = null,
}: {
  location?: FilterType | null;
}): Promise<Product[]> {
  return searchByLocationAndOrder({
    location,
    descOrder: "recommendationScore",
  });
}
