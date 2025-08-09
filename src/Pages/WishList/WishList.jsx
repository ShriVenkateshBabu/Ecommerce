import "./style.scss";
import WishListFn from "./WishListFn.js"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
const WishList = () => {
    const { WishList_Products, HandleDeleteProduct } = WishListFn();
    return (
        <section>
            {
                WishList_Products.length ? (<div className="WishList">

                    {WishList_Products.map((product) => (
                        <Card key={product.id} className="WishList_Card">
                            <center className="WishtList_Card_Center">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.title}
                                    className="WishList_Card_Img"
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
                            <Card.Footer className="WishList_Card_Footer">
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="danger" onClick={() => HandleDeleteProduct(product.id)}><MdDelete /></Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>) : (
                    <p>Please purchase some products</p>
                )
            }

        </section>
    )
}

export default WishList