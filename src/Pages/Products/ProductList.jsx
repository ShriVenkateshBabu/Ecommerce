import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Backdrop, CircularProgress, Button as MuiButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.scss";

const ProductList = () => {
  const { data, ErrMsg, IsLoading } = useOutletContext();
  const navigate = useNavigate()
  console.log(ErrMsg, IsLoading);
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
  const NewProduct = () => {
     navigate("/products/newproduct")
  };
  return (
    <section>
      <div>
        <MuiButton
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
          onClick={NewProduct}
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
                {product.description.length > 40
                  ? product.description.substr(0, 60) + "..."
                  : product.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="ProductList_Card_Footer">
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default ProductList;
