import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import facebook from "../../../assets/img/header/react.svg";
import twitter from "../../../assets/img/header/twitter.svg";
import instagram from "../../../assets/img/header/instagram.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Registro from "../../views/Registro/Registro";
import Login from "../../views/Login/Login";
import ContenedorLogin from "../contenedorLogin/ContenedorLogin";
import ModalCarrito from "../../views/modalCarrito/ModalCarrito";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { AdminHook } from "../../../context/Contexto de Admin/AdminHook";
import { useEffect, useState } from "react";
import { USUARIO_EN_LINEA } from "../../../context/Contexto de Usuarios/typesUser";
import { toast } from "sonner";

const Header = ( ) => {

  const [cantidadCarrito, setCantidadCarrito] = useState(null)
  const navigate = useNavigate()
  const {usuarioEnLinea, usuarioCarrito, tokenUser, obtenerCarritoUsuario, usuarioInfo, setTokenUser, deslogin, obtenerInfoUsuario, obtenerUsuarioFavoritos, dispatch} = UserHook()
  const {resetCarritoYFavoritos, setBuscarProductos} = ProductosHook()
  const {setUsuariosAdmin} = AdminHook()

  const handleSubmit = (e) => {
    e.preventDefault()

    let aBuscar = e.target.search.value

    if (aBuscar.length > 3) {
      setBuscarProductos(aBuscar)
    } else {
      return toast.warning("Se necesitan mas caracteres");
    }
    navigate('/busqueda')
  }

  const totalProductosCarrito = (array) => {
    let numeroDeProductos = 0;
if(array.length > 0) {
    array.forEach(element => {
      numeroDeProductos += element.cantidad
    })};

    setCantidadCarrito(numeroDeProductos)
  }

  useEffect(()=> {
    if(usuarioCarrito) {
      totalProductosCarrito(usuarioCarrito)
    }
  },[usuarioCarrito])

  useEffect(()=>{
    const tokenL = localStorage.getItem("tokenUsuario");
    if(tokenL) {
    obtenerInfoUsuario(tokenL)
    setTokenUser(tokenL)
  }
  },[])

  useEffect(()=>{
    if (usuarioInfo) {
      if(usuarioInfo.expiracion >= Date.now()){
        obtenerCarritoUsuario(tokenUser)
        obtenerUsuarioFavoritos(tokenUser)
        dispatch({ type: USUARIO_EN_LINEA, payload: true });
        setTimeout(()=> {deslogin(resetCarritoYFavoritos, navigate, tokenUser, setUsuariosAdmin), setCantidadCarrito(null)}, usuarioInfo.expiracion - usuarioInfo.iat)
    } else {
      deslogin(resetCarritoYFavoritos, navigate, tokenUser, setUsuariosAdmin)
      setCantidadCarrito(null)
    }
    }
  },[tokenUser])

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
                <Form onSubmit={handleSubmit} className="search d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
                    className="me-2"
                    aria-label="Search"
                    name="search"
                  />
                  <Button variant="outline-success" type="submit">Search</Button>
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
                <NavDropdown title="Categorias" className="d-flex flex-colummn" id="navbarScrollingDropdown">
                  <Link to="/computacion">Computacion</Link>
                  <Link to="/electrodomesticos">Electrodomesticos</Link>
                  <Link to="/aireLibre">Aire Libre</Link>
                </NavDropdown>
                <div className="d-lg-flex">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/destacados">Destacados</NavLink>
                  <NavLink to="/contacto"> Contacto</NavLink>
                  <NavLink to="/favoritos"> Favoritos</NavLink>
                </div>
                <div className=" d-lg-flex  align-self-lg-end">
                  <Nav.Link href=""> Ayuda</Nav.Link>
                  <NavLink  className="position-relative"> <ModalCarrito/> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{usuarioCarrito && usuarioCarrito.length > 0 && cantidadCarrito}</span> </NavLink>
                  {usuarioEnLinea ? <div> <ContenedorLogin/> </div> : <div> <Login/> <Registro/> </div>}
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
