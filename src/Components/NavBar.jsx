import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./ComponentCss/NavBar.scss";
const NavBar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    console.log("Logout function called");
      navigate("/")
  }
  return (
   <nav>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="pl-4" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="pl-4" as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link className="pl-4" as={Link} to="/checkout">
                Checkout
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="navBtn">Search</Button>
            </Form>
            <Button onClick={Logout} className="navBtn">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar