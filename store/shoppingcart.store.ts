import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShoppingBag = create<ShoppingBagState>()(
  persist(
    (set) => ({
      cart: null,

      resetCart: () => set({ cart: null }),
    }),
    { name: "shopping-bag" }
  )
);
