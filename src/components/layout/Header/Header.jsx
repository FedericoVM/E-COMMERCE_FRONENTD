import React, { useEffect, useState } from "react";
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
import facebook from "../../../assets/img/header/react.svg";
import twitter from "../../../assets/img/header/twitter.svg";
import instagram from "../../../assets/img/header/instagram.svg";
import { Link, NavLink } from "react-router-dom";
import Home from "../../views/home/Home";
import Registro from "../../views/Registro/Registro";
import Login from "../../views/Login/Login";
import instance from "../../../axios/instance"
import ControlUsuario from "../controlUsuario/ControlUsuario";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import ContenedorLogin from "../contenedorLogin/ContenedorLogin";

const Header = ({setToken}) => {
  const use_navigate = useNavigate()
  const [datosUsuario, setDatosUsuario] = useState(null)
  const [enLinea, setEnLinea] = useState(false)

  const mostrarUsuario = async (token_usuario) => {
    const config = {
      headers: {
        "authorization": `Bearer ${token_usuario}`
      }
    }

    try {
      const decodificado = await jwt_decode(token_usuario,config)
      setDatosUsuario(decodificado)
    } catch (error) {
      console.log(error);
    }
    

  }

  



  useEffect(() => {
  
    const tokenL = localStorage.getItem("tokenUsuario")
    if (tokenL) {
      mostrarUsuario(tokenL)
    }
   
  }, [])


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
                  <Button variant="outline-success">Search</Button>
                </Form>
                <div className=" redes-header d-none  w-25 d-lg-flex justify-content-lg-around">
                  <Nav.Link href="https://es-la.facebook.com/" target="_blank">
                    <img src={facebook} alt="img-1" />
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/" target="_blank">
                    <img src={twitter} alt="img-2" />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="img-3" />
                  </Nav.Link>
                </div>
              </div>

              <Nav className="m-0 d-flex justify-content-around">
                <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/computacion">Computacion</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/electrodomesticos">Electrodomesticos</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/aireLibre">Aire Libre</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="d-lg-flex">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/destacados">Destacados</NavLink>
                  <NavLink to="/contacto"> Contacto</NavLink>
                  <NavLink to="/favoritos"> Favoritos</NavLink>
                </div>
                <div className=" d-lg-flex  align-self-lg-end">
                  <Nav.Link href="#action8"> Ayuda</Nav.Link>
                  <Nav.Link href="#action9"> Carrito</Nav.Link>
                   { enLinea ? <div> <ContenedorLogin  datosUsuario = {datosUsuario} setToken = {setToken} /> </div> : <div> <Login setToken = {setToken} setEnLinea = {setEnLinea} /> <Registro/> </div> }  
                </div>
                <div className="d-lg-none border-top w-100 p-3 d-flex justify-content-center align-items-center">
                  <div className=" d-flex justify-content-around w-50">
                    <img src={facebook} alt="img-1" />
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
