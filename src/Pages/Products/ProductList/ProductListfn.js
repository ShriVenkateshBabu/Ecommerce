import { addToCart } from "../../../store/cartSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const ProductListfn = () => {
  const dispatch = useDispatch();
  const WishListProducts = useSelector((state) => state.cart);
  const [wishlistSnackbar, SetSnackbar] = useState(false);
  const addtoWishlist = (product) => {
    const CheckWishList = WishListProducts.some(
      (item) => item.id === product.id
    );

    if (!CheckWishList) {
      Swal.fire({
        title: "Success",
        text: "Your Product has been Added to wishlist.",
        icon: "success",
      });
      SetSnackbar(true);
      dispatch(addToCart(product));
    } else {
      Swal.fire({
        title: "Error",
        text: "Your Product is already in wishlist",
        icon: "error",
      });
    }
  };

  const HandleDeleteProduct = (id, data, setData) => {
    const DeleteApi = () => {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const DeleteProductResponse = await axios.delete(
              `https://json-server-msx5.onrender.com/products/${id}`
            );
            if (
              DeleteProductResponse.status == 200 ||
              DeleteProductResponse.status == 201
            ) {
              setData(data.filter((item) => item.id !== id));
            } else {
              throw new Error("Something went wrong");
            }

            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
          }
        });
      } catch (err) {
        console.log(err.message);
        return data;
      }
    };
    DeleteApi();
  };

  return { HandleDeleteProduct, addtoWishlist, wishlistSnackbar };
};

export default ProductListfn;
