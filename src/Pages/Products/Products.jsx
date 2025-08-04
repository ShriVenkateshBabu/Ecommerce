import { Outlet } from "react-router-dom";
import Fetch from "../../Fetch/Fetch";
import "./style.scss";
const Products = () => {
  const { data, ErrMsg, IsLoading } = Fetch("https://fakestoreapi.com/products");

  return (
    <>
      <Outlet context={{data, ErrMsg, IsLoading}} />
    </>
  );
};

export default Products;
