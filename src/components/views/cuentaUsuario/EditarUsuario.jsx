import React from 'react'
import { Button, Col, Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"

const EditarUsuario = () => {
    return (
        <div className='miCuenta'>
            <h2>Mi Cuenta</h2>
            <div className='avatar'>
                <Col xs={6} md={4}>
                    <Image src="" alt='foto-perfil' roundedCircle />
                </Col>
            </div>
            <div className='formulario'>
                <Form>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" defaultValue={""} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" defaultValue={""} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" defaultValue={""} />
                    </Form.Group>
                    <Form.Group className='grupo' defaultValue={""} controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className='grupo' defaultValue={""} controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Avatar</Form.Label>
                        <Form.File id="exampleFormControlFile1" label="Example file input" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditarUsuario