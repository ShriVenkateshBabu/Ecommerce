import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fetch from "../../../Fetch/Fetch";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, Button as MuiButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaShoppingCart } from "react-icons/fa";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.scss";
import ProductListfn from "./ProductListfn";

const ProductList = () => {
  const navigate = useNavigate("");
  const { data, ErrMsg, IsLoading, SetData } = Fetch("http://localhost:3000/products");
  const { HandleDeleteProduct,addtoWishlist } = ProductListfn();
  if (IsLoading) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fffff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  else if (data.length == 0) {
    return <h1>{ErrMsg}</h1>
  }
  return (
    <section>
      <div>
        <MuiButton
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
          onClick={() => navigate("/products/newproduct")}
          className="NewProduct_btn"
        >
          Add New Product
        </MuiButton>
      </div>
      <div className="ProductList">

        {data.map((product) => (
          <Card key={product.id} className="ProductList_Card">
            <center className="ProductList_Card_Center">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="ProductList_Card_Img"
              />
            </center>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description && product.description.length > 40
                  ? product.description.substring(0, 60) + "..."
                  : product.description || "No description available"}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="ProductList_Card_Footer">
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary" onClick={() => addtoWishlist(product)}><FaShoppingCart /></Button>
              <Button variant="secondary" onClick={() => navigate(`/products/updateproduct/${product.id}`)}><FaEdit /></Button>
              <Button variant="danger" onClick={() => HandleDeleteProduct(product.id, data, SetData,)}><MdDelete /></Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default ProductList;
