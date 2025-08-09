import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdataeProductfn = () => {
  const navigate = useNavigate("");
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [UpdateProduct, SetUpdateProduct] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  useEffect(() => {
    const APIFetch = async () => {
      try {
        console.log(id, "inside id");
        const UpdateProductResponse = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        const data = await UpdateProductResponse.data;
        console.log(data, "data");

        SetUpdateProduct({
          ...UpdateProduct,
          title: data.title,
          category: data.category,
          rating: {
            ...UpdateProduct.rating, // optional if rating shape is already correct
            count: data.rating.count,
            rate: data.rating.rate,
          },
        });

        console.log(UpdateProduct, "UpdateProduct");
      } catch (err) {
        console.log(err.message);
      } finally {
      }
    };
    APIFetch();
  }, []);

  const HandleUpdateProduct = (event) => {
    const { name, value } = event.target;
    const FieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      SetUpdateProduct({
        ...UpdateProduct,
        rating: { ...UpdateProduct.rating, [FieldName]: value },
      });
    } else {
      SetUpdateProduct({
        ...UpdateProduct,
        [name]: value,
      });
    }
  };
  const UpdateProductFn = async (e) => {
    e.preventDefault();
    try {
      const PUTAPI = await axios.put(
        `http://localhost:3000/products/${id}`,
        UpdateProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (PUTAPI.status == 200 || PUTAPI.status == 201) {
        setOpen(true);
        setTimeout(() => {
          navigate("/products");
        }, 1500);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(UpdateProduct, "UpdateProduct2");
  return {
    HandleUpdateProduct,
    UpdateProductFn,
    UpdateProduct,
    SetUpdateProduct,
    open,
    setOpen,
  };
};

export default UpdataeProductfn;
