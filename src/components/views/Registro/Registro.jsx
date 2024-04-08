import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InstanceFormData from "../../../axios/instanceFormData";
import FormikComponenteUsuario from "../Formik Componente/FormikComponenteUsuario";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const valuesModal = ["lg-down"];
  const [passwordRequerida, setPasswordRequerida] = useState(false);
  const [confirmarPasswordRequerida, setConfirmarPasswordRequerida] =
    useState(false);

    const navigate = useNavigate()

  const {
    showRegistro,
    setShowRegistro,
    fullscreenRegistro,
    setFullScreenRegistro,
    setFullScreenLogin,
    setShowLogin,
    handleShowModal,
    setBotonBloquear
  } = UserHook();

  const onSubmit = async (values, actions) => {
  
    setBotonBloquear(true)

    if (!values.password) {
      setBotonBloquear(false)
      return setPasswordRequerida(true);
    } else {
      setBotonBloquear(false)
      setPasswordRequerida(false);
    }

    if (!values.confirmarPassword) {
      setBotonBloquear(false)
      return setConfirmarPasswordRequerida(true);
    } else {
      setBotonBloquear(false)
      setConfirmarPasswordRequerida(false);
    }

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
      setShowRegistro(false);
      setBotonBloquear(false)
      navigate('/')
    } catch (error) {
      setBotonBloquear(false)
      console.log(error.response.data.msj);
    }
  };

  useEffect(() => {
    if (confirmarPasswordRequerida === true) {
      setTimeout(() => {
        setConfirmarPasswordRequerida(false);
      }, 3000);
    }
  }, [confirmarPasswordRequerida]);

  useEffect(() => {
    if (passwordRequerida === true) {
      setTimeout(() => {
        setPasswordRequerida(false);
      }, 3000);
    }
  }, [passwordRequerida]);

  return (
    <>
      {valuesModal.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-1"
          onClick={() => handleShowModal(v, setFullScreenRegistro, setShowRegistro)}
        >
          Registrarse
        </Button>
      ))}
      <Modal
        show={showRegistro}
        fullscreen={fullscreenRegistro}
        onHide={() => setShowRegistro(false)}
      >
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
          <div className="d-flex flex-row col-10 justify-content-start mt-3">
            <p>Si ya tienes una cuenta <Link className="" onClick={()=> {setShowRegistro(false), handleShowModal(valuesModal[0], setFullScreenLogin, setShowLogin)}}>Inicia Sesion</Link></p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
