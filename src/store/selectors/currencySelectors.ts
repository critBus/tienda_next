import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const selectSelectedCurrency = createSelector(
  (state: RootState) => {
    const selectedCurrency = state.currency.selectedCurrency;
    return (
      selectedCurrency && {
        id: selectedCurrency.id,
        name: selectedCurrency.name,
        baseRate: selectedCurrency.baseRate,
        isDefault: selectedCurrency.isDefault,
        isBase: selectedCurrency.isBase,
        symbol: selectedCurrency.symbol,
      }
    );
  },
  (selectedCurrency) =>
    selectedCurrency && {
      id: selectedCurrency.id,
      name: selectedCurrency.name,
      baseRate: selectedCurrency.baseRate,
      isDefault: selectedCurrency.isDefault,
      isBase: selectedCurrency.isBase,
      symbol: selectedCurrency.symbol,
    }
);
// export const selectSelectedCurrency = createSelector(
//   (state: RootState) => state.currency.selectedCurrency,
//   (selectedCurrency) =>
//     selectedCurrency && {
//       id: selectedCurrency.id,
//       name: selectedCurrency.name,
//       baseRate: selectedCurrency.baseRate,
//       isDefault: selectedCurrency.isDefault,
//       isBase: selectedCurrency.isBase,
//       symbol: selectedCurrency.symbol,
//     }
// );
