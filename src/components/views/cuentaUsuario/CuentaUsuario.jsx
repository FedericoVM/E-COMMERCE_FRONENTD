import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image } from 'react-bootstrap'
import "./cuentaUsuario.css"
import instance from '../../../axios/instance';
import jwt_decode from "jwt-decode"

const CuentaUsuario = ({token}) => {
    const [usuario, setUsuario] = useState([]);
    // const token_decod= jwt_decode(token)
    // console.log(token_decodificado);

    const miUsuario = async (id_usuario) => {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
    
        try {
          const user = await instance.get(`/usuario/${id_usuario}`,config)
          setUsuario(user.data.usuario)
          
        } catch (error) {
          console.log(error.response.data);
        }
        
      }


    const editarCuenta = () => {
            
    }  

      useEffect(() => {
        miUsuario(token)
      }, [token])
      
      console.log(usuario);
    return (
        <div className='miCuenta'>
            <h2>Mi Cuenta</h2>
            <div className='avatar'>
                <Col xs={6} md={4}>
                    <Image src={`${usuario.avatar}`} alt='foto-perfil' roundedCircle />
                </Col>
            </div>
            <div className='formulario'>
                <Form>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder= {`${usuario.nombre}`} disabled />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder= {`${usuario.apellido}`} disabled/>
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder= {`${usuario.edad}`} disabled />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder= {`${usuario.email}`} disabled />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder= {`${usuario.password}`} disabled />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={editarCuenta}>
                        Editar
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default CuentaUsuario