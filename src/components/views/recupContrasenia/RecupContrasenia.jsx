import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './recupContrasenia.css'
import { regexEmail } from '../../../RegExp/relugarExp'
import instance from '../../../axios/instance'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const RecupContrasenia = () => {

    const {botonBloquear, setBotonBloquear} = UserHook()
    const [errorBack, setErrorBack] = useState(null)

    const navigate = useNavigate()

    const handleRecuperarContrasenia = async (e) => {
        e.preventDefault()

        setBotonBloquear(true)

        let email = e.target.email.value

        if (!regexEmail.test(email)) {
            setBotonBloquear(false)
            return toast.warning("tiene que ingresar un email valido");
        }

        let emailAEnviar = {
            email: email
        }

        try {
            const enviarLink = await instance.post("/usuario/recuperar-contrasenia", emailAEnviar)
            toast.success(enviarLink.data.mensaje);
            if(enviarLink.status === 202){
                toast.warning(enviarLink.data.mensaje)
                return setErrorBack(enviarLink.data.mensaje)
            } else {
                setErrorBack(null)
            }
            setBotonBloquear(false)
            navigate('/')
        } catch (error) {
            toast.error(error.response.data.mensaje)
            setBotonBloquear(false)
            setErrorBack(null)
        }
    }

    return (
        <div className=' d-flex justify-content-center body-contenedor align-items-center'>
            <div className='d-flex flex-column contenedor-elementos col-lg-6 col-md-8 col-10 border border-2 shadow-sm rounded justify-content-evenly align-items-center'>
            <h1 className='text-center recup-contrasenia-titulo'>Olvidaste tu contraseña?</h1>
            <div className='contenedor-form-recuperar-contrasenia d-flex flex-column justify-content-center align-items-center col-11 col-sm-10 '>
                <p className='text-center'>¡No te preocupes! Ingresa el email de tu cuenta y te enviaremos un mail para continuar con el proceso</p>
                {errorBack ? <p className='error-respuesta-recup-contrasenia'>{errorBack}</p>: <span></span>}
                <Form className='d-flex flex-column justify-content-center align-items-center col-sm-12 gap-2 p-0 m-0' onSubmit={handleRecuperarContrasenia}>
                        <Form.Control className='input_email col-sm-9' disabled={botonBloquear} name='email' type="email" placeholder="Ingrese el email" />
                    <Button className='btn btn-primary recup-contrasenia-boton-submit' disabled={botonBloquear}  type="submit">
                        Recuperar contraseña
                    </Button>
                </Form>
                <Link className='mt-2 btn btn-volver-recuperar-contrasenia text-decoration-none' to={'/'}>
                        Volver
                </Link>
            </div>
            </div>
        </div>
    )
}

export default RecupContrasenia