import React  from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InstanceFormData from "../../../axios/instanceFormData";
import FormikComponenteUsuario from "../Formik Componente/FormikComponenteUsuario";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Registro = () => {
  const valuesModal = ["md-down"];
  const navigate = useNavigate();

  const {
    showRegistro,
    setShowRegistro,
    fullScreenRegistro,
    setFullScreenRegistro,
    setFullScreenLogin,
    setShowLogin,
    handleShowModal,
    setBotonBloquear,
  } = UserHook();

  const onSubmit = async (values) => {

    setBotonBloquear(true);

    const nombre = values.nombre;
    const apellido = values.apellido;
    const fechaDeNacimiento = values.fechaDeNacimiento;
    const email = values.email;
    const password = values.password;
    const avatar = values.avatar;

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("fechaDeNacimiento", fechaDeNacimiento);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const respuesta = await InstanceFormData.post(
        "/usuario/registro",
        formData
      );
      toast.success(respuesta.data.msj + ", el link caducara en 3 horas");
      setShowRegistro(false);
      setBotonBloquear(false);
      navigate("/");
    } catch (error) {
      setBotonBloquear(false);
      toast.error(error.response.data.msj);
    }
  };

  return (
    <>
      {valuesModal.map((v, idx) => (
        <Button
          key={idx}
          size="sm"
          className="crear-cuenta"
          onClick={() =>
            handleShowModal(v, setFullScreenRegistro, setShowRegistro)
          }
        >
          Crear cuenta
        </Button>
      ))}
      <Modal
        show={showRegistro}
        fullscreen={fullScreenRegistro}
        onHide={() => setShowRegistro(false)}
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="text-white">Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-0 d-flex flex-column justify-content-center">
          <h4 className="text-center ">Registrarse</h4>
          <div className="d-flex justify-content-center col-12">
            <FormikComponenteUsuario onSubmit={onSubmit} />
          </div>
          <div className="d-flex flex-row align-self-center mt-3">
            <p>
              Si ya tienes una cuenta{" "}
              <Link
                className=""
                onClick={() => {
                  setShowRegistro(false),
                    handleShowModal(
                      valuesModal[0],
                      setFullScreenLogin,
                      setShowLogin
                    );
                }}
              >
                Inicia Sesion
              </Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
