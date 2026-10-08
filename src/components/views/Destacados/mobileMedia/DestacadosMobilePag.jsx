import { Col, Row } from "react-bootstrap";
import DestacadoCards from "../DestacadoCards";

const DestacadosMobilePag = ({ productos }) => {
  console.log('mobile');
  
  return (
    <div className="d-block w-100 d-flex justify-content-center d-sm-none">
            <Row className=" w-100 g-4">
              {productos.map((post, idx) => (
                    <Col sm={10} md={10} key={idx}>
                      <DestacadoCards post={post} />
                    </Col>
                  ))}
            </Row>
          </div>
  );
};

export default DestacadosMobilePag