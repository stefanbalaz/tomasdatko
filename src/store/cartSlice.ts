// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  amount: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<CartItem>) => {
    //   console.log("Before Update:", state.items); // Check the current state
    //   const existingItem = state.items.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (existingItem) {
    //     // Update the amount if the product already exists
    //     existingItem.amount += action.payload.amount;
    //   } else {
    //     // Add the new product if it doesn't exist in the cart
    //     state.items.push(action.payload);
    //   }
    //   console.log("After Update:", state.items); // Check the state after update
    // },

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Update the amount if the product already exists
        existingItem.amount += action.payload.amount;
      } else {
        // Add the new product if it doesn't exist in the cart
        state.items.push(action.payload);
      }

      // Log for debugging
      console.log("Before Update:", [...state.items]); // Before the action is processed
      console.log("After Update:", [...state.items]); // After the action is processed
    },

    updateAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.amount = action.payload.amount;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateAmount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
