import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import InstanceFormData from "../../../axios/instanceFormData"


const Registro = () => {

  const values = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);




  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }





  const registro = async (e) => {

    e.preventDefault()

    const nombre = e.target.nombre.value
    const apellido = e.target.apellido.value
    const edad = e.target.edad.value
    const email = e.target.email.value
    const password = e.target.password.value
    const avatar = e.target.avatar.files[0]

    const formData= new FormData()
    

    formData.append('nombre',nombre);
    formData.append('apellido', apellido);
    formData.append('edad', edad);
    formData.append('email', email);
    formData.append('password', password)
    formData.append('avatar', avatar)
 

    try {
      const respuesta = await InstanceFormData.post("/usuario/registro", formData);
      console.log(respuesta.data.msj);
      setShow(false)
    } catch (error) {
      console.log(error.response.data.msj)
    }

  }











// useEffect(() => {
//   registro()
// }, [])

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
          <Form onSubmit={registro}>
            <Form.Group className="mb-2" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control aria-label="name" name="nombre" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control name="apellido" aria-label="lastName" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control name="edad" type="number" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control name="email" type="email" />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Foto de perfil</Form.Label>
              <Form.Control
                type="file"
                // required
                name="avatar"
              // isInvalid={!!errors.file}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="password" type="password" />
            </Form.Group>
            {/* <Form.Group className="mb-2" controlId="formGroupPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group> */}
            <Button className="w-100 mt-2" as="input" type="submit" value="Registrarse" />
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  </>
);
};

export default Registro;
