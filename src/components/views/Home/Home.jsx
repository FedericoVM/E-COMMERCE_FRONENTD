import { Col, Container, Row } from "react-bootstrap";
import CarouselHome from "./CarouselHome/CarouselHome";
import ListProducts from "./listProducts/ListProducts";

const Home = ({products}) => {
  return (
    <div className="">
      <CarouselHome />
      <div>
        <Row className="mx-0">
          <Col className="" lg={10}>
             <ListProducts products={products} />
          </Col>
          <Col lg={2} className="d-none d-lg-inline publicidad  vh-100  ">
            <img
              className="publicidad-img w-100"
             src="https://github.com/leanceballos30/Proyecto-Final/blob/home/src/assets/img/main/publicidad.jpg?raw=true"
              alt="publicidad_intel"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;