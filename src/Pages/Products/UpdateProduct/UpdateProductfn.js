import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdataeProductfn = () => {
  const navigate = useNavigate("");
  const [NewProduct, SetNewProduct] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count:0,
    },
  });

  const HandleNewProduct = (event) => {
    const { name, value } = event.target;
    const FieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      SetNewProduct({
        ...NewProduct,
        rating: { ...NewProduct.rating, [FieldName]: value },
      });
    } else {
      SetNewProduct({
        ...NewProduct,
        [name]: value,
      });
    }
  };
  const AddProduct = async (e) => {
    e.preventDefault();
    try {
      const POSTAPI = await axios.post(
        "http://localhost:3000/products",
        NewProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (POSTAPI.status == 200 || POSTAPI.status == 201) {
        navigate("/products");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return {
    HandleNewProduct,
    AddProduct,
    NewProduct,
    SetNewProduct,
  };
};

export default UpdataeProductfn;
