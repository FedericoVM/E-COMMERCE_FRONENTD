import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { toast } from 'sonner';

const ModalEsperaPagoBack = ({comprarProducto, classPropiedad}) =>{

  const {errorMercado, setErrorMercado} = ProductosHook();
  const {tokenUser} = UserHook()

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrorMercado(null)
  };
  const handleShow = () => setShow(true);

  const procesarRespuesta = async() =>{
    if (!tokenUser) {
      return toast.warning('Inicie sesion para poder comprar.')
    }
    handleShow()
    await comprarProducto();
  }

    return(
        <>
        <Button className={classPropiedad} onClick={async() => {procesarRespuesta()}}>
          Comprar
        </Button>
        <Modal
        size='sm'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton = {errorMercado == null ? false : true}>
            <Modal.Title>{errorMercado == null ? 'Procesando':'Error'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center'>
            {errorMercado == null?  <Spinner/>: errorMercado}
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={errorMercado == null ? true : false} variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ModalEsperaPagoBack