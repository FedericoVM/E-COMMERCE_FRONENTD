import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/CarouselHome";
import Paginacion from "../paginacion/Paginacion";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";
import ResponseBackProductos from "../../layout/respuesta de request de productos/ResponseBackProductos";

const Home = ( ) => {

  const {productosHome} = ProductosHook()

  return (
    <>
    <div className="d-none d-sm-block">
      <CarouselHome />
      </div>
      <div >
        <Row className=" mx-0 d-flex">
          <Col lg={10}>
            {productosHome !== null ? <ResponseBackProductos productosHome={productosHome}/> : <CargandoProductos/>}
          </Col>
          <Col lg={2} className="d-none bg-danger d-lg-inline publicidad">
            <img
              className="publicidad-img img-fluid h-100"
              src={publicidad}
              alt="publicidad_intel"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;