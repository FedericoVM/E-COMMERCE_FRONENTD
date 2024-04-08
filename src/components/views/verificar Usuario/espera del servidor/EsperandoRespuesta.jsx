import { Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const EsperandoRespuesta = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-content-center col-12 align-items-center">
      <Card className="text-center col-5 bg-ligth bg-opacity-50">
        <Card.Header className="h4 text-primary">Rolling Store</Card.Header>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="fs-3 text-warning">Activando cuenta</Card.Title>
          <Card.Text className="h5 text-warning">
          Esperando respuesta del servidor...
          </Card.Text>
          <Spinner animation="border" className="my-2" variant="primary"/>
          <Link to='/' className="btn btn-primary mt-2">Inicio</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EsperandoRespuesta;
