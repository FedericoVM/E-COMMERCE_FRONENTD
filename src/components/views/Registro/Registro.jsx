import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InstanceFormData from "../../../axios/instanceFormData";
import FormikComponenteUsuario from "../Formik Componente/FormikComponenteUsuario";

const Registro = () => {
  const valuesModal = ["lg-down"];
  const [passwordRequerida, setPasswordRequerida] = useState(false);
  const [confirmarPasswordRequerida, setConfirmarPasswordRequerida] = useState(false)
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const onSubmit = async (values, actions) => {
  
    if (!values.password) {
      return setPasswordRequerida(true);
    } else {
      setPasswordRequerida(false)
    }

    if (!values.confirmarPassword) {
      return setConfirmarPasswordRequerida(true);
    } else {
      setConfirmarPasswordRequerida(false)
    }

    return console.log(values);
    const nombre = values.nombre;
    const apellido = values.apellido;
    const edad = values.edad;
    const email = values.email;
    const password = values.password;
    const avatar = values.avatar;

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("edad", edad);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const respuesta = await InstanceFormData.post(
        "/usuario/registro",
        formData
      );
      console.log(respuesta.data.msj);
      actions.resetForm();
      setShow(false);
    } catch (error) {
      console.log(error.response.data.msj);
    }
  };

useEffect(()=> {
  if (confirmarPasswordRequerida === true) {
    setTimeout(()=> {setConfirmarPasswordRequerida(false)},3000)
  }
},[confirmarPasswordRequerida])

useEffect(()=> {
  if (passwordRequerida === true) {
    setTimeout(()=> {setPasswordRequerida(false)},3000)
  }
},[passwordRequerida])

  return (
    <>
      {valuesModal.map((v, idx) => (
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
            <FormikComponenteUsuario
              passwordRequerida={passwordRequerida}
              setPasswordRequerida={setPasswordRequerida}
              onSubmit={onSubmit}
              confirmarPasswordRequerida={confirmarPasswordRequerida}
              setConfirmarPasswordRequerida={setConfirmarPasswordRequerida}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
