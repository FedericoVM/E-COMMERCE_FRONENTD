import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UsuarioVerificado = ({ mensajeOk }) => {
  return (
    <div className="d-flex w-100 justify-content-center">
      <Card className="text-center col-7 border border-3 border-success border-opacity-50">
        <Card.Header className="h4 text-primary">Rolling Store</Card.Header>
        <Card.Body>
          <Card.Title className="fs-3 text-success">Cuenta Activada</Card.Title>
          <Card.Text className="h5 fw-folder text-success text-opacity-75">
            {mensajeOk}
          </Card.Text>
          <Link to="/" className="btn btn-primary mt-2">
            Inicio
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsuarioVerificado;
