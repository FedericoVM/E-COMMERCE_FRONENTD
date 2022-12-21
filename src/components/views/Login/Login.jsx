import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const values = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
              <Button className="w-100 text-center" variant="primary" type="submit">
                Iniciar Sesión
              </Button>
              <Form.Group className="my-1" controlId="formBasicPassword">
                No tienes cuenta?  
                <Link to="/login" className="link-form ms-2 text-decorate-none">Registrarse</Link>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Link to="/recuperar-contrasenia" className="link-form " >Recuperar contraseña</Link>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
