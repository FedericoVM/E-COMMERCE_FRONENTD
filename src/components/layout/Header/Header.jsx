import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
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
import { Offcanvas } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const Header = () => {
  const [cantidadCarrito, setCantidadCarrito] = useState(null);
  const navigate = useNavigate();
  const {
    usuarioEnLinea,
    usuarioCarrito,
    tokenUser,
    obtenerCarritoUsuario,
    usuarioInfo,
    setTokenUser,
    deslogin,
    obtenerInfoUsuario,
    obtenerUsuarioFavoritos,
    dispatch,
  } = UserHook();
  const { resetCarritoYFavoritos, setBuscarProductos } = ProductosHook();
  const { setUsuariosAdmin } = AdminHook();

  const handleSubmit = (e) => {
    e.preventDefault();

    let aBuscar = e.target.search.value;

    if (aBuscar.length > 3) {
      setBuscarProductos(aBuscar);
    } else {
      console.log("Se necesitan mas caracteres");
    }
    navigate("/busqueda");
  };

  const totalProductosCarrito = (array) => {
    let numeroDeProductos = 0;
    if (array.length > 0) {
      array.forEach((element) => {
        numeroDeProductos += element.cantidad;
      });
    }

    setCantidadCarrito(numeroDeProductos);
  };

  const irAVentana = (destino) =>{
    return navigate(`/${destino}`)
  } 

  useEffect(() => {
    if (usuarioCarrito) {
      totalProductosCarrito(usuarioCarrito);
    }
  }, [usuarioCarrito]);

  useEffect(() => {
    const tokenL = localStorage.getItem("tokenUsuario");
    if (tokenL) {
      obtenerInfoUsuario(tokenL);
      setTokenUser(tokenL);
    }
  }, []);

  useEffect(() => {
    if (usuarioInfo) {
      if (usuarioInfo.expiracion >= Date.now()) {
        obtenerCarritoUsuario(tokenUser);
        obtenerUsuarioFavoritos(tokenUser);
        dispatch({ type: USUARIO_EN_LINEA, payload: true });
        setTimeout(() => {
          deslogin(
            resetCarritoYFavoritos,
            navigate,
            tokenUser,
            setUsuariosAdmin
          ),
            setCantidadCarrito(null);
        }, usuarioInfo.expiracion - usuarioInfo.iat);
      } else {
        deslogin(resetCarritoYFavoritos, navigate, tokenUser, setUsuariosAdmin);
        setCantidadCarrito(null);
      }
    }
  }, [tokenUser]);

  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className="header-nav justify-content-between"
      >
        <Container fluid>
          <Link className="d-flex fs-4 d-block d-md-none text-decoration-none align-self-center">
            Rolling Store
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="start"
            className="flex-md-column canvas-bs-header justify-md-content-space"
          >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <Link to={"/"} className="d-flex logotipo-header fs-4 text-decoration-none align-self-center">
                  Rolling Store
                </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column">
              <div className=" d-flex flex-column d-md-flex flex-md-row justify-content-md-around">
                <Link to={"/"} className="d-flex logotipo-header fs-4 d-none d-md-block text-decoration-none align-self-center">
                  Rolling Store
                </Link>
                <Form onSubmit={handleSubmit} className="search col-md-5 d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
                    className="me-2"
                    aria-label="Search"
                    name="search"
                  />
                  <i className="bi bi-search"></i>
                  <Button className="boton-buscar-header" type="submit">
                    <FaSearch />
                  </Button>
                </Form>
                <div className=" redes-header d-none col-md-4 d-md-flex align-items-md-center justify-content-md-around">
                  <Link
                    to={"/nosotros"}
                    className="text-decoration-none text-secondary px-md-1 px-lg-2 btn-hover"
                  >
                    Nostros
                  </Link>
                  <Link
                    href="https://www.google.com"
                    target="_blank"
                    className="px-md-1 px-lg-2 py-0 text-secondary btn-hover text-decoration-none"
                  >
                    Ayuda
                  </Link>
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
              <Nav className="m-0 navbar-items-header d-md-flex justify-content-md-around">
                <div className="col-md-2 col-lg-3 d-flex justify-content-md-center justify-content-lg-end">
                <NavDropdown
                  title="Categorias"
                  className="btn-hover boton-select-header"
                >
                  <DropdownItem className="nav-drop-down" onClick={() => {irAVentana("computacion")}}>
                      Computacion
                  </DropdownItem>
                  <DropdownItem className="nav-drop-down" onClick={() => {irAVentana("electrodomesticos")}}>
                      Electrodomesticos
                  </DropdownItem>
                  <DropdownItem className="nav-drop-down" onClick={() => {irAVentana("aireLibre")}}>
                      Aire Libre
                  </DropdownItem>
                  </NavDropdown>
                </div>
                <div className="d-flex flex-column col-md-6 col-lg-5 d-md-flex justify-content-center flex-md-row align-items-md-center gap-3">
                  <NavLink
                    className="text-decoration-none btn-hover px-md-1 px-lg-2 text-secondary"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="text-decoration-none btn-hover px-md-1 px-lg-2 text-secondary"
                    to="/destacados"
                  >
                    Destacados
                  </NavLink>
                  <NavLink
                    className="text-decoration-none btn-hover px-md-1 px-lg-2 text-secondary"
                    to="/contacto"
                  >
                    {" "}
                    Contacto
                  </NavLink>
                  <NavLink
                    className="text-decoration-none btn-hover px-md-1 px-lg-2 text-secondary"
                    to="/favoritos"
                  >
                    {" "}
                    Favoritos
                  </NavLink>
                </div>
                <div className="col-md-4 d-flex col-12 mt-3 mt-md-0 flex-row-reverse align-items-center gap-1 d-md-flex  gap-md-3 justify-content-between justify-content-md-center">
                  {usuarioEnLinea ? (
                    <div className="col-md-8 col-10">
                      <ContenedorLogin />
                    </div>
                  ) : (
                    <div className="d-flex d-md-flex col-10 col-md-auto flex-md-row align-items-lg-center gap-2">
                      <Registro />
                      <Login />
                    </div>
                  )}
                  <NavLink className="position-relative col-1 col-md-auto text-center">
                    <ModalCarrito/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {usuarioCarrito &&
                        usuarioCarrito.length > 0 &&
                        cantidadCarrito}
                    </span>
                  </NavLink>
                </div>
                <div className="d-md-none border-top w-100 mt-2 py-2 d-flex justify-content-center align-items-center">
                  <div className=" d-flex justify-content-around w-50">
                    <img src={facebook} alt="img-1" />
                    <img src={instagram} alt="img-2" />
                    <img src={twitter} alt="img-3" />
                  </div>
                </div>
              </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
