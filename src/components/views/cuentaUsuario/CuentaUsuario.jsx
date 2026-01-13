import { Form, Image, Spinner } from 'react-bootstrap'
import "./cuentaUsuario.css"
import { Link } from 'react-router-dom'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import HistorialDeCompras from './historial de compras/HistorialDeCompras'
import { useEffect } from 'react'
import AnimacionCargando from '../../layout/animacion cargando/AnimacionCargando'

const CuentaUsuario = () => {

    const {usuarioInfo, tokenUser, obtenerHistorialDeCompras, usuarioHistorialCompras} = UserHook()

    useEffect(()=>{
        obtenerHistorialDeCompras(tokenUser, usuarioInfo.email)
    },[])

    return (
        <div className='d-flex flex-column mt-4 justify-content-center align-items-center'>
            <div className='d-flex flex-column flex-md-row col-12 justify-content-center align-items-center justify-content-md-evenly align-items-md-start'>
            <section className='d-flex flex-column col-12 col-md-5 justify-content-center align-items-center'>
            <div className=''>
                    <Image className='usuario-avatar' src={usuarioInfo.imagen} alt='foto-perfil' roundedCircle />
            </div>
            <div className='d-flex flex-column my-3 justify-content-center align-items-center col-12'>
                <Form className='col-11 col-sm-8 col-md-10'>
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
                <div className='contenedor-botones-pagina-usuario d-flex justify-content-evenly col-12'>
                <Link to={'/cambiarPassword'} className="btn boton-cambiar-contrasenia-cuenta-usuario">Cambiar Contrasenia</Link>
                <Link to={`/editar-usuario/${usuarioInfo.id_usuario}`} className="btn boton-editar-cuenta-usuario">Editar</Link>
                </div>
            </div>
            </section>
            <section className='col-11 col-md-7 d-flex flex-column bg-white p-sm-3 border seccion-contenedor-historial-compras'>
                <h3 className='col-12 titulos-de-paginas text-center m-0 py-3 py-sm-0 pb-sm-3 pb-md-3'>Historial de compras</h3>
                {usuarioHistorialCompras !== null ? <HistorialDeCompras/>: <AnimacionCargando/>}
            </section>
            </div>
        </div>
    )
}

export default CuentaUsuario