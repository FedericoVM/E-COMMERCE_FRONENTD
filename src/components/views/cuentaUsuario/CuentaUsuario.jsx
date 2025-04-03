import { Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"
import { Link } from 'react-router-dom'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'

const CuentaUsuario = () => {

    const {usuarioInfo} = UserHook()

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='my-3 titulos-de-paginas'>Mi Cuenta</h2>
            <div className=''>
                    <Image className='usuario-avatar' src={usuarioInfo.imagen} alt='foto-perfil' roundedCircle />
            </div>
            <div className='d-flex flex-column my-3 justify-content-center align-items-center col-12'>
                <Form className='col-11 col-sm-8 col-md-4'>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder = {usuarioInfo.nombre} disabled  />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder =  {usuarioInfo.apellido}  disabled/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Fecha De Nacimiento</Form.Label>
                        <Form.Control type="text" placeholder = {usuarioInfo.fechaDeNacimiento}  disabled />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder = {usuarioInfo.email}  disabled />
                    </Form.Group>
                </Form>
                <div className='contenedor-botones-pagina-usuario d-flex justify-content-evenly col-11 col-sm-8 col-md-5'>
                <Link to={'/cambiarPassword'} className="btn boton-cambiar-contrasenia-cuenta-usuario">Cambiar Contrasenia</Link>
                <Link to={`/editar-usuario/${usuarioInfo.id_usuario}`} className="btn boton-editar-cuenta-usuario">Editar</Link>
                </div>
            </div>
        </div>
    )
}

export default CuentaUsuario