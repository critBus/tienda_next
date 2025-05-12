import { Decimal } from "@prisma/client/runtime/library";
import { Currency } from "./currency.types";

export type PriceDTO = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  currencyId: number;
  value: Decimal;
  isFixed: boolean;
};
export interface Price {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  currencyId: number;
  value: number;
  isFixed: boolean;
  currency: Currency;
}
// export interface PriceWithCurrency extends PriceDTO {
//   currency: CurrencyDTO;
// }
export type PriceSerializer = Omit<Price, "createdAt" | "updatedAt">;
