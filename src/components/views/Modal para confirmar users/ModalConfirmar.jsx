import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { regexPassword } from '../../../RegExp/relugarExp';

const ModalConfirmar = ({onSubmit, values, errors}) =>{
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams()

  const navigate = useNavigate()
  const {tokenUser, setBotonBloquear} = UserHook()

  const confirmarDatosInputs = (values, errors) =>{

    setBotonBloquear(true)

    if(Object.keys(errors).length > 0){
      handleClose()
      setBotonBloquear(false)
      return toast.error("Compruebe que los datos no tengan errores")
    }
    onSubmit(values)
    handleClose()
    navigate('/cuenta-usuario')
    setBotonBloquear(false)
    return toast.success("Cambios Guardados");
  }

  const confirmarCambiarContrasenia = () => {
    setBotonBloquear(true)

    if(!values){
      setBotonBloquear(false)
      handleClose()
      return toast.error("La casilla esta vacia")
    }

    if(values.length > 30){
      setBotonBloquear(false)
      return toast.warning('Exedio el maximo de caracteres');
  }

  if(!regexPassword.test(values)){
      setBotonBloquear(false)
      return toast.error("la contrasenia debe contener un minimo de 5 caracteres con caracteres especiales y mayusculas")
  }

  onSubmit(values)
  setBotonBloquear(false)
  handleClose()
  navigate('/cuenta-usuario')
  return toast.success('Se guardaron los cambios')
  }

  return (
    <>
      <Button variant="primary" className='my-3' onClick={handleShow}>
        Guardar
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size='sm'
      >
        <Modal.Header closeButton>
          <Modal.Title>Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!id ? "Desea cambiar su contrasenia?" : "Desea guardar los cambios?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!id? <Button variant="primary" onClick={() => {confirmarCambiarContrasenia()}}>Guardar</Button> : <Button variant="primary" onClick={() => {confirmarDatosInputs(values, errors)}}>Guardar</Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirmar