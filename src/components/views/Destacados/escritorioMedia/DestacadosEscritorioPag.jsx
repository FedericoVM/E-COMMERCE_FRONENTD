import {Col, Row} from "react-bootstrap";
import DestacadoCards from "../DestacadoCards";

const DestacadosEscritorioPag = ({productos}) => {
  return (
    <div className="d-none col-11 d-lg-block">
      <Row lg={3} className="m-0 g-4">
        {productos.map((post, idx) => (
            <Col key={idx}>
              <DestacadoCards post={post} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default DestacadosEscritorioPag