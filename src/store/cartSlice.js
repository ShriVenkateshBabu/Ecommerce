import { Remove } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const CartProduct = JSON.parse(localStorage.getItem("cart"));
const cartSlice = createSlice({
  name: "cart",
  initialState: CartProduct || [],
  reducers: {
    addToCart(state, { payload }) {
      state.push(payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    RemoveFromCart(state, action) {
      const WishList_rmv_id = action.payload;
      const WishList_Products = state.filter(
        (product) => product.id !== WishList_rmv_id
      );
      localStorage.setItem("cart", JSON.stringify([...WishList_Products]));
      return WishList_Products;
    },
  },
});
export const { addToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
