import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './recupContrasenia.css'
import { regexEmail } from '../../../RegExp/relugarExp'
import instance from '../../../axios/instance'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'

const RecupContrasenia = () => {

    const {botonBloquear, setBotonBloquear} = UserHook()

    const handleRecuperarContrasenia = async(e) => {
        e.preventDefault()

        setBotonBloquear(true)

        let email = e.target.email.value

        if(!regexEmail.test(email)){
            setBotonBloquear(false)
           return console.log("tiene que ingresar un email valido");
        }

        let emailAEnviar = {
            email: email
        }

        try {
            const enviarLink = await instance.post("/usuario/recuperar-contrasenia", emailAEnviar)
            console.log(enviarLink.data.mensaje);
            setBotonBloquear(false)
        } catch (error) {
            setBotonBloquear(false)
            console.log(error.response.data.mensaje);
        }
    }

    return (
        <div className='div-recuperar-contrasenia p-4'>
            <h1>Rolling Store</h1>
            <div className='contenedor-form-recuperar-contrasenia mt-3'>
                <h3 className='text-center'>¿Te olvidaste tu contraseña?</h3>
                <p>¡No te preocupes! Ingresa el email de tu cuenta y te enviaremos un correo para continuar con el proceso</p>
                <Form className='form-cambiar-contrasenia' onSubmit={handleRecuperarContrasenia}>
                        <Form.Control className='input_email' disabled={botonBloquear} name='email' type="email" placeholder="Ingrese el email" />
                    <Button className='btn btn-outline-primary my-2 text-light' disabled={botonBloquear}  type="submit" size="">
                        Recuperar contraseña
                    </Button>
                </Form>
                <Button className='btn btn-link mt-2' disabled={botonBloquear} type="submit" size="sm">
                        Volver
                    </Button>
            </div>
        </div>
    )
}

export default RecupContrasenia