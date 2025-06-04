import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./esperandoRespuesta.css"
import AnimacionCargando from "../../../layout/animacion cargando/AnimacionCargando";

const EsperandoRespuesta = () => {
  return (
    <div className="col-11 col-sm-8 col-md-6 d-flex flex-column justify-content-center esperando-respuesta-body align-items-center">
      <Card className="text-center esperando-respuesta-card-content  border border-3 col-11 col-sm-10 col-md-9 col-lg-7">
        <Card.Header className="h4 esperando-respuesta-text-logo ">Rolling Store</Card.Header>
        <Card.Body className="d-flex flex-column align-items-center">
          <AnimacionCargando/>
          <div className="d-flex flex-column align-items-center justify-content-evenly esperando-respuesta-content">
          <Card.Title className="fs-3 text-dark text-opacity-75">Activando cuenta</Card.Title>
          <Card.Text className="h5">
          Esperando respuesta del servidor...
          </Card.Text>
          <Link to='/' className="btn btn-primary esperando-respuesta-boton-inicio mt-2">Inicio</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EsperandoRespuesta;
