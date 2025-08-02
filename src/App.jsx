import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Home from "./Pages/HomePage/Home";
import Products from "./Pages/Products/Products";
import ProductList from "./Pages/Products/ProductList";
import ProductDetails from "./Pages/Products/ProductDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="/products/productlist/?:id" element={<ProductList />} />
            <Route path="/products/?:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
