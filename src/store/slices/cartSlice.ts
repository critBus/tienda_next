import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";
import superjson from "superjson";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const STORAGE_KEY = "cartItems";

function loadInitialCart(): CartItem[] {
  // if (typeof window !== "undefined") {
  //   const stored = localStorage.getItem(STORAGE_KEY);
  //   if (stored) {
  //     return superjson.parse(stored); // Deserialize using superjson
  //   }
  // }
  return [];
}

const initialState: CartState = {
  items: loadInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, superjson.stringify(state.items)); // Serialize using superjson
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, superjson.stringify(state.items)); // Serialize using superjson
      }
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
      }
    },
    hydrateCart: (state) => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          state.items = superjson.parse(stored); // Deserialize using superjson
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, hydrateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
