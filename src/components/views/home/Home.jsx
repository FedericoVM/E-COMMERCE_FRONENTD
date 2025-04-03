import { Col, Row } from "react-bootstrap";
import CarouselHome from "./carouselHome/CarouselHome";
import Publicidad from "./Publicidad/Publicidad";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";
import ResponseBackProductos from "../../layout/respuesta de request de productos/ResponseBackProductos";

const Home = ({productos}) => {
 
  return (
    <>
    <div className="d-none d-sm-block">
      <CarouselHome/>
      </div>
      <div >
        <Row className=" mx-0 d-flex">
          <Col lg={10}>
            {productos.length > 0 ? <ResponseBackProductos productosHome={productos}/> : <CargandoProductos/>}
          </Col>
          <Col lg={2} className="d-none d-lg-inline publicidad">
            <Publicidad/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;