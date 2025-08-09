import { addToCart } from "../../../store/cartSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
const ProductListfn = () => {
  const dispatch = useDispatch();
  
  const addtoWishlist = (product) => {
    dispatch(addToCart(product));
  };

  const HandleDeleteProduct = (id, data, setData) => {
    const DeleteApi = async () => {
      try {
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
      } catch (err) {
        console.log(err.message);
        return data;
      }
    };
    DeleteApi();
  };

  return { HandleDeleteProduct, addtoWishlist };
};

export default ProductListfn;
