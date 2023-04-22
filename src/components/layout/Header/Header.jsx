import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header.css";
import facebook from "../../assets/header/react.svg";
import twitter from "../../assets/header/twitter.svg";
import instagram from "../../assets/header/instagram.svg";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-self-start">
            Rolling Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="flex-lg-column justify-lg-content-space"
          >
            <Nav
              className="me-auto my-2 my-lg-0 flex-lg-column m-lg-0 w-100"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-lg-flex justify-content-lg-around ">
                <Form className="search d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* <Button variant="outline-success">Search</Button> */}
                </Form>
                <div className=" redes-header d-none  w-25 d-lg-flex justify-content-lg-around">
                  <Nav.Link href="https://es-la.facebook.com/" target="_blank">
                    <img src={facebook} alt="img-1" />
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/" target="_blank">
                    {" "}
                    <img src={twitter} alt="img-2" />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/" target="_blank">
                    {" "}
                    <img src={instagram} alt="img-3" />
                  </Nav.Link>
                </div>
              </div>

              <Nav className="m-0 d-flex justify-content-around">
                <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">opcion 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">opcion 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">opcion 2</NavDropdown.Item>
                </NavDropdown>
                <div className="d-lg-flex">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <NavDropdown
                    className="d-md-none  "
                    title="Categorias"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      Categorias
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Destacados</Nav.Link>
                  <Nav.Link href="#action6"> Contacto</Nav.Link>
                  <Nav.Link href="#action7"> Favoritos</Nav.Link>
                </div>
                <div className=" d-lg-flex  align-self-lg-end">
                  <Nav.Link href="#action8"> Ayuda</Nav.Link>
                  <Nav.Link href="#action9"> Carrito</Nav.Link>
                  <Nav.Link href="#action10"> Registrarse</Nav.Link>
                  <Nav.Link href="#action11"> Login</Nav.Link>
                </div>
                <div className="d-lg-none border-top w-100 p-3 d-flex justify-content-center align-items-center">
                  <div className=" d-flex justify-content-around w-25">
                  <img src={facebook}alt="img-1" />
                  <img src={instagram} alt="img-2" />
                  <img src={twitter} alt="img-3" />
                  </div>
                </div>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;