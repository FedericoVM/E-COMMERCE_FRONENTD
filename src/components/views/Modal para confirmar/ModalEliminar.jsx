import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsTrashFill } from "react-icons/bs";
import { AdminHook } from "../../../context/Contexto de Admin/AdminHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const ModalEliminar = ({ usuario, objetivo, eliminar, id }) => {
  
  const {tokenUser} = UserHook()
  const {mostrarUsuariosAdmin, cambiarRolUser, eliminarUsuario} = AdminHook()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarYCerrarModal = (usuario, objetivo) => {
    if(objetivo === "rol"){
      cambiarRolUser(usuario.role, usuario._id, tokenUser, mostrarUsuariosAdmin)
    }
    if(objetivo === "usuario") {
      eliminarUsuario(usuario._id, tokenUser, mostrarUsuariosAdmin)
    }
    if(objetivo === "producto"){
      eliminar(id)
    }
    handleClose(false);
  };

  return (
    <>
      <Button variant={objetivo === "rol" ? "primary": "danger"} onClick={handleShow}>
      {objetivo === "rol" ? "Cambiar" : <BsTrashFill />}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rolling Store</Modal.Title>
        </Modal.Header>
        {objetivo === "producto" && <Modal.Body>Desea eliminar este producto?</Modal.Body>}
        {objetivo === "usuario" && <Modal.Body>Desea eliminar a este usuario?</Modal.Body>}
        {objetivo === "rol" && <Modal.Body>Desea cambiar de rol a este usuario?</Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant={objetivo === "rol" ? "primary": "danger"}
            onClick={() => {
              eliminarYCerrarModal(usuario, objetivo);
            }}
          >
            {objetivo === "rol" ? "Cambiar" : <BsTrashFill />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEliminar;
