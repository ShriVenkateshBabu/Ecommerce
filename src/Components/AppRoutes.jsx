import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/Products/Products";
import ProductList from "../Pages/Products/ProductList";
import ProductDetails from "../Pages/Products/ProductDetails";
import Checkout from "../Pages/Checkout/Checkout";
import {  useEffect, useState } from "react";
const AppRoutes = () => {
  const location = useLocation();
  const [hidenav, setnavbar] = useState(true);
  useEffect(() => {
    const noNavRoutes = ["/", "/login", "/signup"];
    setnavbar(noNavRoutes.includes(location.pathname));
  }, [location]);
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
          <Route path="/products/productlist/?:id" element={<ProductList />} />
          <Route path="/products/?:id" element={<ProductDetails />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )}
export default AppRoutes;