import React from 'react'
import "./cambiarContrasenia.css"
import candado from "../../../assets/cambiarContrasenia/bloquear.png"
import { Button, Form } from 'react-bootstrap'


const CambiarContrasenia = () => {
    return (
        <div className='contenedor'>
            <h1>Rolling Store | Cuenta</h1>
            <div className='contenedor-form'>
                <div className='div-img'>
                    <img src={candado} alt="imagen-candado" />
                </div>
                <Form>
                    <Form.Control className='form-password' type="password" placeholder="Ingrese la nueva contraseña" />
                    <Button variant="primary" type="submit">
                        Cambiar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default CambiarContrasenia