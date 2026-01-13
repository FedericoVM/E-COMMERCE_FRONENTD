import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { toast } from 'sonner';
import ErrorPago from './ErrorPago';

const ModalEsperaPagoBack = ({comprarProducto, classPropiedad}) =>{

  const {errorMercado, setErrorMercado} = ProductosHook();
  const {handleCloseModalCarrito, tokenUser, setBrilloModalCarrito} = UserHook()

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrorMercado(null);
    setBrilloModalCarrito(false);
    handleCloseModalCarrito(false)
  };
  const handleShow = () => setShow(true);

  const procesarRespuesta = async() =>{

    if (!tokenUser) {
      return toast.warning('Inicie sesion para poder comprar.')
    }
    handleShow()
    setBrilloModalCarrito(true)
    await comprarProducto(handleClose);
  }

    return(
        <>
        <Button className={classPropiedad} onClick={procesarRespuesta}>
          Comprar
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton = {errorMercado == null ? false : true}>
            <Modal.Title className='text-white'>{errorMercado == null ? 'Procesando':'Error'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center tabla-body-productos-sin-stock'>
            {errorMercado === null?  <Spinner/>: <ErrorPago/>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ModalEsperaPagoBack