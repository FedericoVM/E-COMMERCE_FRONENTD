import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import {toast} from "sonner"

const ModalConfirmarProductos = ({onSubmit, initialValues, touched, errors, resetForm, productoEdit}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const confirmarError = (errors) =>{

      if (productoEdit){
        if (Object.keys(errors).length > 0){
          return toast.error("Compruebe que los datos sean correctos")
        }
        onSubmit(initialValues)
        return handleClose()
      } else {
        if(!(initialValues.imagenProducto.type === "image/jpeg" || initialValues.imagenProducto.type === "image/png")){
            return toast.error("Verifique los campos obligatorios")
        }

        if(Object.keys(errors).length > 0 || Object.keys(touched).length === 0){
            return toast.error("Verifique los campos obligatorios")
        }
        onSubmit(initialValues, resetForm)
        return handleClose()
    }
  }
  
    return (
      <>
        <Button variant="primary" className='d-flex align-self-end my-3' onClick={handleShow}>
          Guardar
        </Button>
        <Modal show={show} centered keyboard size='sm' onHide={handleClose}>
          <Modal.Header closeButton closeVariant='white'>
            <Modal.Title>Rolling Store</Modal.Title>
          </Modal.Header>
          <Modal.Body>{productoEdit ? "Desea guardar cambios?" : "Desea agregar este producto?"}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type='submit' variant="primary" onClick={() => {confirmarError(errors)}}>
              {productoEdit ? "Guardar Cambios" : "Guardar"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalConfirmarProductos