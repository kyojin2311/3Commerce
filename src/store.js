import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/shoppingSlice";

export const store = configureStore({
  reducer: cartReducer,
});
