import { Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"
import { Link } from 'react-router-dom'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'

const CuentaUsuario = () => {

    const {usuarioInfo} = UserHook()

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='my-3'>Mi Cuenta</h2>
            <div className=''>
                    <Image className='usuario-avatar' src={ usuarioInfo ? usuarioInfo.imagen : ""} alt='foto-perfil' roundedCircle />
            </div>
            <div className='d-flex flex-column my-3 justify-content-center align-items-center col-md-4'>
                <Form className='col-12'>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder = { usuarioInfo ? usuarioInfo.nombre : ""} disabled  />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder =  {usuarioInfo ? usuarioInfo.apellido : ""}  disabled/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder = {usuarioInfo ? usuarioInfo.edad : ""}  disabled />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder = {usuarioInfo ? usuarioInfo.email : "" }  disabled />
                    </Form.Group>
                </Form>
                <div className='d-flex justify-content-evenly w-100'>
                <Link to={'/cambiarPassword'} className="btn btn-primary">Cambiar Contrasenia</Link>
                <Link to={`/editar-usuario/${ usuarioInfo ? usuarioInfo.id_usuario : ""}` } className="btn btn-primary">Editar</Link>
                </div>
            </div>
        </div>
    )
}

export default CuentaUsuario