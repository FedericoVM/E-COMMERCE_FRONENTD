import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import Paginacion from "../paginacion/Paginacion";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";

const Home = ( ) => {

  const {productosHome} = ProductosHook()

  return (
    <>
      <CarouselHome />
      <div >
        <Row className=" mx-0 d-flex">
          <Col lg={10}>
            {productosHome.length > 0 ? <Paginacion lista={productosHome} card={"card"}/> : <h1>Sin productos...</h1>}
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