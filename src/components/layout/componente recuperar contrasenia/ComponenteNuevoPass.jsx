import { Form } from 'react-bootstrap'
import "./cambiarContrasenia.css"
import candado from '../../../assets/cambiarContrasenia/bloquear.png'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import ModalConfirmar from '../../views/Modal para confirmar users/ModalConfirmar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ComponenteNuevoPass = ({handleCambiarContrasenia}) =>{

    const [contrasenia, setContrasenia] = useState(null)

    const {botonBloquear} = UserHook()

    return (
        <div className='contenedor'>
            <h1 className='text-center texto-rolling'>Rolling Store | Cuenta</h1>
            <div className='contenedor-form'>
                <div className='div-img'>
                    <img className='img-candado' src={candado} alt="imagen-candado" />
                </div>
                <div className='form-cambiar-contrasenia'>
                    <Form.Control className='form-password' disabled={botonBloquear} onChange={(e)=>{setContrasenia(e.target.value)}} type="password" placeholder="Ingrese la nueva contraseña" name='CambiarContrasenia'/>
                    <div className='d-flex flex-row-reverse justify-content-evenly w-100 align-items-center'>
                    <ModalConfirmar onSubmit={handleCambiarContrasenia} values={contrasenia}/>
                    <Link to='/cuenta-usuario' className='btn btn-primary'>Inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponenteNuevoPass