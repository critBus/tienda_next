import type { Price as PricePrisma } from "@/app/generated/prisma/index";
import { CurrencyDTO } from "./currency.types";

export type PriceDTO = PricePrisma;
export interface Price {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  currencyId: number;
  value: number;
  isFixed: boolean;
  currency: CurrencyDTO;
}
