import { Button, Col, Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"
import { Link } from 'react-router-dom'

const CuentaUsuario = ({usuario}) => {


    return (
        <div className='miCuenta'>
            <h2>Mi Cuenta</h2>
            <div className='avatar'>
                <Col xs={6} md={4}>
                    <Image className='usuario-avatar' src={ usuario ? usuario.imagen : ""} alt='foto-perfil' roundedCircle />
                </Col>
            </div>
            <div className='formulario'>
                <Form>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder = { usuario ? usuario.nombre : ""} disabled  />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder =  {usuario ? usuario.apellido : ""}  disabled/>
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder = {usuario ? usuario.edad : ""}  disabled />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder = {usuario ? usuario.email : "" }  disabled />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Cambiar contraseña</Form.Label>
                    </Form.Group>
                </Form>
                <Link to={`/editar-usuario/${ usuario ? usuario.id_usuario : ""}` } className="btn btn-primary mx-1">Editar</Link>
            </div>

        </div>
    )
}

export default CuentaUsuario