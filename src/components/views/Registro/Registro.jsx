import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

const Registro = () => {
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
          Registrarse
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="text-white">Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center ">Registrarse</h4>
          <div>
            <Form>

              <Form.Group className="mb-2" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control aria-label="name"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formAge">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupPassword">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button className="w-100 mt-2" as="input" type="submit" value="Registrarse" />
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
