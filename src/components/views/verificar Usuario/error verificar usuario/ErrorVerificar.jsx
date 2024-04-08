import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReenviarToken from "../reenviar Token/ReenviarToken";

const ErrorVerificar = ({mensajeError, errorStatus}) => {

  return (
    <div className="d-flex w-100 justify-content-center">
      <Card className="text-center text-center col-7 border border-3 border-danger border-opacity-75">
        <Card.Header className="h4 text-primary">Rolling Store</Card.Header>
        <Card.Body>
          <Card.Title className="fs-3 text-danger">Algo paso</Card.Title>
          <Card.Text className="h5 fw-folder text-danger text-opacity-75">
           {mensajeError}
          </Card.Text>
          <div className="d-flex flex-row-reverse justify-content-center">
          {errorStatus === 405 && <ReenviarToken/>}
          <Link to="/" className="btn btn-primary mx-2 mt-2">
            Inicio
          </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ErrorVerificar;
