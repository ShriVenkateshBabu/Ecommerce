import { Outlet } from "react-router-dom";
import Fetch from "../../Fetch/Fetch";
import "./style.scss";
const Products = () => {
  const { data, ErrMsg, IsLoading } = Fetch();

  return (
    <div>
      <Outlet context={{data, ErrMsg, IsLoading}} />
    </div>
  );
};

export default Products;
