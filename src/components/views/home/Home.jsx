import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import Paginacion from "../paginacion/Paginacion";
import Publicidad from "./Publicidad/Publicidad";
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";
import ResponseBackProductos from "../../layout/respuesta de request de productos/ResponseBackProductos";

const Home = ({productos}) => {
 
  return (
    <>
    <div className="d-none d-sm-block">
      <CarouselHome />
      </div>
      <div >
        <Row className=" mx-0 d-flex">
          <Col lg={10}>
            {productos !== null ? <ResponseBackProductos productosHome={productos}/> : <CargandoProductos/>}
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