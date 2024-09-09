import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { regexEmail } from '../../../../RegExp/relugarExp';
import instance from '../../../../axios/instance';
import { UserHook } from '../../../../context/Contexto de Usuarios/UserHook';
import "./reenviarToken.css"

const ReenviarToken = () =>{
    const [show, setShow] = useState(false);

    const {botonBloquear, setBotonBloquear} = UserHook()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToken = async (e) =>{
    e.preventDefault()

    setBotonBloquear(true)

    let email = e.target.email.value

    if(!regexEmail.test(email)){
      setBotonBloquear(false)
      return console.log("Ingrese un email valido");
    }

    const emailAEnviar = {
      email
    }

    try {
      let reenviarToken = await instance.post('usuario/reenviar-token',emailAEnviar)
      setBotonBloquear(false)
      console.log(reenviarToken.data.mensaje);
      return handleClose()
    } catch (error) {
      setBotonBloquear(false)
      console.log(error);
    }
  }

  return (
    <>
      <Button disabled={botonBloquear} variant="primary" className='mt-2 boton-reenviar-token mx-2' onClick={handleShow}>
        Reenviar Token
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-reenviar-token-header' closeButton>
          <Modal.Title>Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Ingrese su email para verificar si el token caduco, en caso de haber caducado se le enviara un nuevo link a su email</Form.Label>
          <Form onSubmit={handleToken} className='d-flex flex-column'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              disabled={botonBloquear}
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                className='my-2'
              />
            </Form.Group>
            <Button className='align-self-end boton-enviar-token boton-reenviar-token' disabled={botonBloquear} variant="primary" type='submit' >
            Enviar
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReenviarToken