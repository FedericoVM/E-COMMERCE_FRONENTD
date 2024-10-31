import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import Paginacion from "../paginacion/Paginacion";
import Publicidad from "./Publicidad/Publicidad";

const Home = ({productos}) => {
 
  return (
    <>
      <CarouselHome />
      <div className="">
        <Row className="mx-0 d-flex min-vh-100">
          <Col lg={10}>
            {productos.length > 0 ? <Paginacion lista={productos} card={"card"}/> : <h1>Sin productos...</h1>}
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