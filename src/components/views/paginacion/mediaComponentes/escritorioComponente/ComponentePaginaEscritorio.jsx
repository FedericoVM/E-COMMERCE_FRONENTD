import ProductCard from "../../../home/productCard/ProductCard";
import { Col, Row } from "react-bootstrap";

const ComponentePaginaEscritorio = ({productosHome}) => {
  return (
    <div className="d-flex flex-column">
      <Row lg={5} className="g-4 d-none mx-0 d-md-none d-lg-flex mt-3 col-12">
        {productosHome.map((p, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <ProductCard p={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ComponentePaginaEscritorio;
