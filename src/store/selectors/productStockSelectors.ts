import { createSelector } from "@reduxjs/toolkit";
import { CartState } from "../slices/cartSlice";
export const selectProductStockInfo = createSelector(
  [
    (state: CartState) => state.items,
    (_: CartState, productId: number) => productId,
    (_: CartState, __: number, stock: number) => stock,
  ],
  (items, productId, stock) => {
    const cartItem = items.find((item) => item.product.id === productId);
    const cartQuantity = cartItem ? cartItem.quantity : 0;
    const remainingStock = stock - cartQuantity;
    const isAvailable = remainingStock > 0;

    return {
      cartQuantity,
      remainingStock,
      isAvailable,
    };
  }
);
