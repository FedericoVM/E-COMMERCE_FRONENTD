import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InstanceFormData from "../../../axios/instanceFormData";
import { Formik, useFormik } from "formik";
import { schemaRegistro } from "../../../schemas/register";

const Registro = () => {
  const valuesModal = ["lg-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const onSubmit = async (e) => {
    
    const nombre = values.nombre;
    const apellido = values.apellido;
    const edad = values.edad;
    const email = values.email;
    const password = values.password;
    const avatar = values.avatar;

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("edad", edad);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const respuesta = await InstanceFormData.post(
        "/usuario/registro",
        formData
      );
      console.log(respuesta.data.msj);
      setShow(false);
    } catch (error) {
      console.log(error.response.data.msj);
    }
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      edad: "",
      email: "",
      avatar: "",
      password: "",
    },
    validationSchema: schemaRegistro,
    onSubmit,
  });

  return (
    <>
      {valuesModal.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Registrarse
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="text-white">Rolling Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center ">Registrarse</h4>
          <div>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Form.Group className="mb-2" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="name"
                  name="nombre"
                  className={errors.nombre && touched.nombre ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                />
              </Form.Group>
              {errors.nombre && touched.nombre && <p className="text-validation">{errors.nombre}</p>}
              <Form.Group className="mb-2" controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  value={values.apellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="apellido"
                  aria-label="lastName"
                  className={errors.apellido && touched.apellido ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                />
              </Form.Group>
              {errors.apellido && touched.apellido && <p className="text-validation">{errors.apellido}</p>}
              <Form.Group className="mb-2" controlId="formAge">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  value={values.edad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="edad"
                  type="number"
                  className={errors.edad && touched.edad ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  className={errors.email && touched.email ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                />
              </Form.Group>
              {errors.email && touched.email && <p className="text-validation">{errors.email}</p>}
              <Form.Group className="position-relative mb-3">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control
                  onChange={(e) => setFieldValue("avatar", e.target.files[0])}
                  onBlur={handleBlur}
                  type="file"
                  // required
                  name="avatar"
                  className={errors.avatar && touched.avatar ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                  // isInvalid={!!errors.file}
                />
              </Form.Group>
              {errors.avatar && touched.avatar && <p className="text-validation">{errors.avatar}</p>}
              <Form.Group className="mb-2" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  className={errors.password && touched.password ? "border border-danger border-1 shadow-lg border-opacity-75": ""}
                />
              </Form.Group>
              {errors.password && touched.password && <p className="text-validation m-0 p-0">{errors.password}</p>}
              {/* <Form.Group className="mb-2" controlId="formGroupPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group> */}
              <Button
                className="w-100 mt-2"
                as="input"
                type="submit"
                value="Registrarse"
              />
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registro;
