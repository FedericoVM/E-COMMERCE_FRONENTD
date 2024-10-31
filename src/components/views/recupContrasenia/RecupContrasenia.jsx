import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './recupContrasenia.css'
import { regexEmail } from '../../../RegExp/relugarExp'
import instance from '../../../axios/instance'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const RecupContrasenia = () => {

    const { botonBloquear, setBotonBloquear } = UserHook()

    const navigate = useNavigate()

    const handleRecuperarContrasenia = async (e) => {
        e.preventDefault()

        setBotonBloquear(true)

        let email = e.target.email.value

        if (!regexEmail.test(email)) {
            setBotonBloquear(false)
            return console.log("tiene que ingresar un email valido");
        }

        let emailAEnviar = {
            email: email
        }

        try {
            const enviarLink = await instance.post("/usuario/recuperar-contrasenia", emailAEnviar)
            toast.success("Revise su email para continuar")
            setBotonBloquear(false)
            navigate('/')
        } catch (error) {
            setBotonBloquear(false)
            console.log(error.response.data.mensaje);
        }
    }

    return (
        <div className='div-recuperar-contrasenia min-vh-100 justify-content-center'>
            <h1 className='pb-3'>Rolling Store</h1>
            <div className='contenedor-form-recuperar-contrasenia'>
                <h3 className='text-center'>¿Te olvidaste tu contraseña?</h3>
                <p>¡No te preocupes! Ingresa el email de tu cuenta y te enviaremos un correo para continuar con el proceso</p>
                <Form className='form-cambiar-contrasenia' onSubmit={handleRecuperarContrasenia}>
                    <Form.Control className='input_email' disabled={botonBloquear} name='email' type="email" placeholder="Ingrese el email" />
                    <Button className='btn-recup my-3' disabled={botonBloquear} variant="primary" type="submit" size="sm">
                        Recuperar contraseña
                    </Button>
                </Form>
                <Button className='btn-volver mt-1' disabled={botonBloquear} variant="primary" type="submit" size="sm">
                    Volver
                </Button>
            </div>
        </div>
    )
}

export default RecupContrasenia