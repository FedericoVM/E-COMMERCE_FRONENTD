import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import {USUARIO_EN_LINEA} from "../../../context/Contexto de Usuarios/typesUser";

const Login = ( ) => {
  const valuesM = ["lg-down"];
  const [errorValidacion, setErrorValidacion] = useState(true);
  const [errorMensaje, setErrorMensaje] = useState(null);

  const navigate = useNavigate()

  const resetErrorMensaje = () =>{
  setShowLogin(false);
  setErrorValidacion(true)
  setErrorMensaje(null)
  }

  const {
    dispatch,
    setTokenUser,
    obtenerInfoUsuario,
    obtenerCarritoUsuario,
    obtenerUsuarioFavoritos,
    showLogin,
    setShowLogin,
    setShowRegistro,
    fullScreenLogin,
    setFullScreenLogin,
    setFullScreenRegistro,
    handleShowModal,
    botonBloquear,
    setBotonBloquear
  } = UserHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setBotonBloquear(true)

    let email = e.target.email.value;
    let password = e.target.password.value;

    const usuario = {
      email,
      password,
    };

    try {
      const respuesta = await instance.post("usuario/login", usuario);
      const token_usuario = respuesta.data.token;
      localStorage.setItem("tokenUsuario", token_usuario);
      obtenerCarritoUsuario(token_usuario);
      obtenerUsuarioFavoritos(token_usuario)
      setTokenUser(token_usuario);
      setShowLogin(false);
      dispatch({ type: USUARIO_EN_LINEA, payload: true });
      obtenerInfoUsuario(token_usuario);
      setBotonBloquear(false)
      navigate('/')
    } catch (error) {
      setErrorValidacion(false);
      setBotonBloquear(false)
      console.log(error);
      return setErrorMensaje(error.response.data.mensaje);
    }
  };

  return (
    <>
      {valuesM.map((v, idx) => (
        <Button key={idx} variant="outline" className="ingresar"  size="sm" onClick={() => handleShowModal(v, setFullScreenLogin, setShowLogin)}>
          Ingresar
        </Button>
      ))}
      <Modal show={showLogin} fullscreen={fullScreenLogin} onHide={() => resetErrorMensaje()}>
        <Modal.Header
          closeButton
          className="modalHeader d-flex align-items-center"
        >
          <Modal.Title className="text-center">
            <h4 className="text-white fw-bold">Rolling Store</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h4 className="text-center ">Bienvenido/a</h4>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" disabled={botonBloquear} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control disabled={botonBloquear} type="password" name="password" />
              </Form.Group>
              {!errorValidacion && (
                <p className="text-validation">{errorMensaje}</p>
              )}
              <Button
                className="w-auto btn-iniciar-sesion"
                size="sm"
                type="submit"
                disabled={botonBloquear}
              >
                Iniciar Sesión
              </Button>
              <Form.Group className="mt-2" >
                No tienes cuenta?
                <Button disabled={botonBloquear} variant="link" size="sm" onClick={() => {setShowLogin(false); handleShowModal(valuesM[0], setFullScreenRegistro, setShowRegistro)}} className="link-form ms-2">
                  Registrate
                </Button>
              </Form.Group>
            </Form>
            <Form.Group>
                Olvidaste la contraseña?
                <Button disabled={botonBloquear} variant="link" size="sm" onClick={() => {setShowLogin(false); navigate('recuperar-contrasenia')}} className="link-form ms-2">
                  Recuperar Contraseña
                </Button>
              </Form.Group> 
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;