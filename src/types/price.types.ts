import type { Price as PricePrisma } from "@/app/generated/prisma/index";
import { CurrencyDTO } from "./currency.types";

export type PriceDTO = PricePrisma;
export interface Price extends PriceDTO {
  currency: CurrencyDTO;
}
