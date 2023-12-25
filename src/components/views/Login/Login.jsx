import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import jwt_decode from "jwt-decode";
import { Formik, useFormik } from "formik";
import { schemaLogin } from "../../../schemas/login";

const Login = ({ setEnLinea, setToken, setDatosUsuario }) => {
  const valuesM = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const login = async (values) => {
 
    let email = values.email;
    let password = values.password;

    const usuario = {
      email,
      password,
    };

    try {
      const respuesta = await instance.post("/usuario/login", usuario);
      const token_usuario = respuesta.data.token;
      localStorage.setItem("tokenUsuario", token_usuario);
      setToken(token_usuario);
      setShow(false);
      setEnLinea(true);
      mostrarUsuario(token_usuario);
    } catch (error) {
      return console.log(error.response.data.mensaje);
    }
  };


  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaLogin,
    onSubmit:login
  });


  const mostrarUsuario = async (token_usuario) => {
    try {
      const decodificado = await jwt_decode(token_usuario);
      setDatosUsuario(decodificado);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {valuesM.map((v, idx) => (
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
            <Formik>
              <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    className={errors.email && touched.email ? "input-error":""}
                  />
                  {errors.email && touched.email && <p className="error"> {errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                
                  />
                
                </Form.Group>
                <Button
                  className="w-100 text-center"
                  variant="primary"
                  type="submit"
            
                >
                  Iniciar Sesión
                </Button>
                <Form.Group className="my-1" controlId="formBasicPassword">
                  No tienes cuenta?
                  <Link to="/login" className="link-form ms-2  ">
                    Registrarse
                  </Link>
                  <p></p>
                </Form.Group>
              </Form>
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
