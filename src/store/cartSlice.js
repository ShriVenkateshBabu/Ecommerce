import { Remove } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, { payload }) {
      state.push(payload);
    },
    RemoveFromCart(state, action) {
      const WishList_rmv_id = action.payload;
      const WishList_Products = state.filter(
        (product) => product.id !== WishList_rmv_id
      );
      return WishList_Products;
    },
  },
});
export const { addToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
