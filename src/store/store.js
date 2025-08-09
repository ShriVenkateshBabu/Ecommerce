import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./cartSlice.js";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
});

export default store;
