import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../../store/cartSlice";

const WishListFn = () => {
  const dispatch = useDispatch()
  const WishList_Products = useSelector((state) => {
    return state.cart;
  });
  const HandleDeleteProduct =(id)=>{
    dispatch(RemoveFromCart(id)) 
  }
  return {
    WishList_Products,HandleDeleteProduct
  };
};

export default WishListFn;
