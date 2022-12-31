import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import instance from "../../../assets/api/axios";
import { useNavigate } from "react-router-dom";

const Login = ({getUser}) => {
  const values = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  const handleLogin = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    const login = {
      email,
      password
    }
    try {
      const res = await instance.post('/users/logear-usuario',login);
      localStorage.setItem('token',JSON.stringify(res.data.token))
      getUser()
      navigate('/')
      setShow(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Login
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header
          closeButton
          className="modalHeader d-flex align-items-center"
        >
          <Modal.Title className="text-center">
            <h3 className="text-white fw-bold">Rolling Store</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center ">Bienvenido/a</h4>
          <div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password"/>
              </Form.Group>
              <Button className="w-100 text-center" variant="primary" type="submit">
                Iniciar Sesión
              </Button>
              <Form.Group className="my-1" controlId="formBasicPassword">
                No tienes cuenta?  
                <Link to="/login" className="link-form ms-2 text-decorate-none">Registrarse</Link>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Link to="/recuperar-contrasenia" className="link-form " >Recuperar contraseña</Link>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
