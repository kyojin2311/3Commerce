import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const shoppingSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalPrice += action.payload.price;
        state.totalQuantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
        state.totalQuantity++;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
      state.totalPrice += item.price;
      state.totalQuantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.totalPrice -= item.price;
        state.totalQuantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id === action.payload
      );
      const leftedItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = leftedItem;
      state.totalQuantity -= removeItem.length;
      state.totalPrice -= removeItem.price * removeItem.quantity;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  shoppingSlice.actions;

const cartReducer = shoppingSlice.reducer;
export default cartReducer;
