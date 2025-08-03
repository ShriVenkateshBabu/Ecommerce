import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useOutletContext } from "react-router-dom";
import "./style.scss";

const ProductList = () => {
  const {data , ErrMsg, IsLoading} = useOutletContext();
  console.log(ErrMsg, IsLoading);
  return (
    <section className="ProductList">
      {data.map((product) => (
        <Card  key={product.id} className="ProductList_Card">
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
            <Card.Text>{product.description.length > 40 ? product.description.substr(0, 60)+"..." : product.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="ProductList_Card_Footer">
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Footer>
        </Card>
      ))}
    </section>
  );
};
export default ProductList;
