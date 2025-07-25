// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // will store product objects
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // action.payload = product object
      const item = action.payload;

      // Check if already in cart
      const existing = state.cartItems.find((p) => p.id === item.id);

      if (existing) {
        // Option 1: increase quantity
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      // action.payload = product id
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
