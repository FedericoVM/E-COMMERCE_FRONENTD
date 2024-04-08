import { Button, Form } from 'react-bootstrap'
import "./cambiarContrasenia.css"
import candado from '../../../assets/cambiarContrasenia/bloquear.png'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
const ComponenteNuevoPass = ({handleCambiarContrasenia}) =>{

    const {botonBloquear} = UserHook()

    return (
        <div className='contenedor'>
            <h1 className='text-center texto-rolling'>Rolling Store | Cuenta</h1>
            <div className='contenedor-form'>
                <div className='div-img'>
                    <img className='img-candado' src={candado} alt="imagen-candado" />
                </div>
                <Form className='form-cambiar-contrasenia' onSubmit={handleCambiarContrasenia}>
                    <Form.Control className='form-password' disabled={botonBloquear} type="password" placeholder="Ingrese la nueva contraseña" name='CambiarContrasenia'/>
                    <Button className='boton-cambiar-contrasenia my-3' disabled={botonBloquear} variant="primary" type="submit">
                        Cambiar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ComponenteNuevoPass