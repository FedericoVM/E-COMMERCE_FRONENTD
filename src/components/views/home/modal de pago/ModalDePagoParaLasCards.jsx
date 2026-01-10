import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ProductosHook } from '../../../../context/Contexto de Productos/ProductosHook';
import { Spinner } from 'react-bootstrap';
import "./modalDePagoParaLasCards.css"

const ModalDePagoParaLasCards = () =>{

    const {modalCompraCard, setModalCompraCard, errorMercado, setErrorMercado} = ProductosHook()
  
    const handleClose = () => {
        setErrorMercado(null)
        setModalCompraCard(false)
    };
    
    return (
      <>
        <Button hidden>
        </Button>
        <Modal
          show={modalCompraCard}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          size={errorMercado === null && "sm"}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-white'>{errorMercado === null ? "Comprando" : "Error"}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex justify-content-center'>
            {errorMercado === null ? <Spinner/>: errorMercado.data.message}
          </Modal.Body>
          <Modal.Footer>
            <Button className='boton-cerrar-modal-pago-cards' disabled={errorMercado === null ? true : false} onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ); 
}

export default ModalDePagoParaLasCards