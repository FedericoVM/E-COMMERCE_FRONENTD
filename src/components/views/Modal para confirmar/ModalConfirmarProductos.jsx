import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast} from "sonner"

const ModalConfirmarProductos = ({onSubmit, initialValues, resetForm, productoEdit, validateForm, valoresIniciales, setInitialValuesForm}) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirmarError = () =>{
      validateForm().then((formErrors) => {
        if (Object.keys(formErrors).length > 0) {
          return toast.error("Compruebe que los datos sean correctos");
        }
        handleShow();
      });
  }

  const submitProducto = () =>{
    
    if(productoEdit){
      onSubmit(initialValues)
      resetForm()
        return handleClose()
    } else {
    onSubmit(initialValues);
    resetForm({values: valoresIniciales()})
    setInitialValuesForm(valoresIniciales())
    return handleClose()
  }
  }
  
    return (
      <>
        <Button type='submit' className='boton-guardar-productos-form' onClick={confirmarError}>
          Guardar
        </Button>
        <Modal show={show} centered keyboard size='sm' onHide={handleClose}>
          <Modal.Header closeButton closeVariant='white' className='modal-producto-confirm-header'>
            <Modal.Title>Rolling Store</Modal.Title>
          </Modal.Header>
          <Modal.Body>{productoEdit ? "Desea guardar cambios?" : "Desea agregar este producto?"}</Modal.Body>
          <Modal.Footer>
            <Button className='boton-cerrar-modal-producto' onClick={handleClose}>
              Cancelar
            </Button>
            <Button className='boton-submit-modal-producto' type='submit' onClick={submitProducto}>
              {productoEdit ? "Guardar Cambios" : "Guardar"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalConfirmarProductos