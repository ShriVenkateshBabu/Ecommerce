import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./LoginAvatar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchAppBar from "./SearchBar";
import "./ComponentCss/NavBar.scss";
const NavBar = () => {
 
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
            <SearchAppBar />
            <AccountMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar