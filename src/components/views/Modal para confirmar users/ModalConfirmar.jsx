import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'sonner';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';

const ModalConfirmar = ({onSubmit, resetForm, validateForm, values}) =>{
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {usuarioInfo} = UserHook()

  const confirmarErrores = () =>{
    validateForm().then((formErrors) =>{
      if(Object.keys(formErrors).length > 0){
        return toast.error('Compruebe que los datos sean correctos');
      }
      handleShow()
    })
  }

  const submitDatos = () =>{
    if(usuarioInfo){
      onSubmit(values)
    }
    onSubmit(values)
    resetForm()
    return handleClose()
  }

  return (
    <>
      <Button type='submit' className='my-3 boton-submit-user' onClick={confirmarErrores}>
        {usuarioInfo ? "Guardar" : "Registrarse"}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size='sm'
      >
        <Modal.Header closeButton className='modal-user-header'>
          <Modal.Title className='modal-titulo-user'>Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuarioInfo ? "Desea guardar los cambios?" : "Enviaremos un token a su correo para completar el registro"}
        </Modal.Body>
        <Modal.Footer>
          <Button className="boton-cerrar-modal-usuario-form" onClick={handleClose}>
            Close
          </Button>
          <Button className="boton-submit-modal-usuario-form" type='submit' onClick={submitDatos}>{usuarioInfo ? 'Guardar' : 'Registrarse'}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirmar