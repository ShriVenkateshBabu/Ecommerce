import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductListfn = () => {
  const HandleDeleteProduct = (id, data, setData) => {
    const DeleteApi = async () => {
      try {
        const DeleteProductResponse = await axios.delete(
          `http://localhost:3000/products/${id}`
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

  return { HandleDeleteProduct };
};

export default ProductListfn;
