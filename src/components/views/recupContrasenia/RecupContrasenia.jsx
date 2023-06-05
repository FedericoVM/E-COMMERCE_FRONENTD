import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './recupContrasenia.css'

const RecupContrasenia = () => {
    return (
        <div >
            <h1>Rolling Store</h1>
            <div className='contenedor-form'>
                <h3>¿Te olvidaste tu contraseña?</h3>
                <p>¡No te preocupes! Ingresa el email de tu cuenta y te enviaremos un correo para continuar con el proceso</p>
                <Form className='form '>
                        <Form.Control className='input_email' type="email" placeholder="Ingrese el email" />
                    <Button className='btn-recup' variant="primary" type="submit" size="lg">
                        Recuperar contraseña
                    </Button>
                    <Button className='btn-volver' variant="primary" type="submit" size="sm">
                        Volver
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default RecupContrasenia