import { Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"
import { Link } from 'react-router-dom'

const CuentaUsuario = ({usuario}) => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='my-3'>Mi Cuenta</h2>
            <div className=''>
                    <Image className='usuario-avatar' src={ usuario ? usuario.imagen : ""} alt='foto-perfil' roundedCircle />
            </div>
            <div className='d-flex flex-column my-3 justify-content-center align-items-center col-md-4'>
                <Form className='col-12'>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder = { usuario ? usuario.nombre : ""} disabled  />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder =  {usuario ? usuario.apellido : ""}  disabled/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder = {usuario ? usuario.edad : ""}  disabled />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder = {usuario ? usuario.email : "" }  disabled />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Cambiar contraseña</Form.Label>
                    </Form.Group>
                </Form>
                <Link to={`/editar-usuario/${ usuario ? usuario.id_usuario : ""}` } className="btn btn-primary col-5">Editar</Link>
            </div>
        </div>
    )
}

export default CuentaUsuario