import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReenviarToken from "../reenviar Token/ReenviarToken";
import "./verificar-usuario.css"

const VerificarRespuesta = ({mensajeOk ,mensajeError, errorStatus}) => {

  return (
    <div className="d-flex align-items-center col-11 col-md-10 col-lg-6 body-verificar-usuario justify-content-center">
      <Card className="text-center text-center col-11 col-sm-10 col-md-9 col-lg-7 card-content-verificar border border-3">
        <Card.Header className="h4 text-logo-verificar-usuario">Rolling Store</Card.Header>
        <img className="imagen-verificar-usuario col-sm-6 align-self-center" alt="error" src={mensajeOk ? import.meta.env.VITE_IMAGE_URL_VERIFICAR_CUENTA_SUCCESS : import.meta.env.VITE_IMAGE_URL_VERIFICAR_CUENTA_ERROR}/>
        <Card.Body className="d-flex flex-column py-0 justify-content-evenly body-card-verificar-usuario">
          <Card.Title className={mensajeOk ? "fs-2 text-success" : "fs-2 text-danger"}>{mensajeOk ? "Cuenta Activada": "Algo salio mal."}</Card.Title>
          <Card.Text className="fw-folder texto-response-back">
           {mensajeOk ? mensajeOk : mensajeError}
          </Card.Text>
          <div className="d-flex flex-row-reverse justify-content-center">
          {errorStatus === 405 && <ReenviarToken/>}
          <Link to="/" className="btn boton-inicio-verificar-usuario btn-primary mx-sm-2 mt-2">
            Inicio
          </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VerificarRespuesta;
