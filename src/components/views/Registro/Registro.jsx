import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import instance from "../../../assets/api/axios";

const Registro = () => {
  const values = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleRegistro = async(e) =>{
    e.preventDefault()
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let edad = e.target.edad.value;
    let confirmarPassword = e.target.confirmarPassword.value;
    console.log(password)
    console.log(confirmarPassword)
    if (password !== confirmarPassword){
      return alert("contraseñas incorrectas")
    }

    let nuevoUsuario = {
      nombre,
      apellido,
      email,
      password,
      edad,
    }

    try {
      await instance.post('/users/registrar-usuario',nuevoUsuario);
    } catch (error) {
console.log(error)
    }
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Registrarse
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="text-white">Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center ">Registrarse</h4>
          <div>
            <Form onSubmit={handleRegistro}>
              <Form.Group className="mb-2" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control aria-label="name" name="nombre"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control aria-label="name" name="apellido"/>
              </Form.Group>
              <div className="d-flex justify-content-around">
              <Form.Group className="mb-2 col-2" controlId="formAge">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" name="edad"/>
              </Form.Group>
              <Form.Group className="mb-2 col-9" controlId="formGroupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email"/>
              </Form.Group>
              </div>
              <Form.Group className="mb-2" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password"/>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" name="confirmarPassword"/>
              </Form.Group>
              <Button className="mt-2" as="input" type="submit" value="Registrarse" />
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
