import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/Products/Products";
import ProductList from "../Pages/Products/ProductList/ProductList";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import NewProduct from "../Pages/Products/NewProduct/NewProduct";
import UpdateProduct from "../Pages/Products/UpdateProduct/UpdateProduct";
import Checkout from "../Pages/Checkout/Checkout";
import WishList from "../Pages/WishList/WishList";
const AppRoutes = () => {
  const location = useLocation();
  const [hidenav, setnavbar] = useState(true);
  useEffect(() => {
    const noNavRoutes = ["/", "/login", "/signup"];
    setnavbar(noNavRoutes.includes(location.pathname));
  }, [location]);
  if(!localStorage.getItem("cart")){
    localStorage.setItem("cart",JSON.stringify([]))
  }
  return (
    <div>
      {!hidenav && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="/products/productlist/" element={<ProductList />} />
          <Route path="/products/Details" element={<ProductDetails />} />
          <Route path="/products/newproduct" element={<NewProduct />} />
          <Route path="/products/UpdateProduct/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
