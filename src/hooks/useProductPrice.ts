import { Price } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
interface PropsExpected {
  Price: Price[];
  priceBaseCurrency: number;
}
export default function useProductPrice(product: PropsExpected) {
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );
  const price = product.Price.find(
    (price) => price.currencyId === selectedCurrency?.id
  );
  const convertedPrice = price?.value;
  const originalPrice = convertedPrice || Number(product.priceBaseCurrency);
  return {
    convertedPrice,
    originalPrice,
    symbol: price?.currency.symbol ?? "$",
  };
}
