import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import jwt_decode from "jwt-decode";

const Login = ({ setEnLinea, setToken, setDatosUsuario }) => {
  const values = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const mostrarUsuario = async (token_usuario) => {
    try {
      const decodificado = await jwt_decode(token_usuario);
      setDatosUsuario(decodificado);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    const usuario = {
      email,
      password,
    };

    try {
      const respuesta = await instance.post("/usuario/login", usuario);
      const token_usuario = respuesta.data.token;
      localStorage.setItem("tokenUsuario", token_usuario);
      setToken(token_usuario);
      setShow(false);
      setEnLinea(true);
      mostrarUsuario(token_usuario);
    } catch (error) {
      console.log(error.response.data.mensaje);
    }
  };

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Login
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header
          closeButton
          className="modalHeader d-flex align-items-center"
        >
          <Modal.Title className="text-center">
            <h3 className="text-white fw-bold">Rolling Store</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center ">Bienvenido/a</h4>
          <div>
            <Form onSubmit={login}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" />
              </Form.Group>
              <Button
                className="w-100 text-center"
                variant="primary"
                type="submit"
              >
                Iniciar Sesión
              </Button>
              <Form.Group className="my-1" controlId="formBasicPassword">
                No tienes cuenta?
                <Link to="/login" className="link-form ms-2  ">
                  Registrarse
                </Link>
                <p></p>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
