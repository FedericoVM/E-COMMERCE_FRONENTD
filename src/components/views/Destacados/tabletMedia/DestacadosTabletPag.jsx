import { Row, Col } from "react-bootstrap";
import DestacadoCards from "../DestacadoCards";

const DestacadosTabletPag = ({ productos }) => {
  
  return (
    <div className="d-none d-flex justify-content-center d-sm-block d-lg-none col-12">
      <Row md={3} sm={2} className="col-12 m-0 g-4">
        {productos.map((post, idx) => (
          <Col key={idx}>
            <DestacadoCards post={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DestacadosTabletPag;
