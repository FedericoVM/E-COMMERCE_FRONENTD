import React from "react";
import Iframe from "react-iframe";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {validarNombre, validarTelefono, validarEmail, validarObservacion} from './validations/Validations'
import Swal from "sweetalert2";

const Contacto = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let nombre = e.target.nombre.value;
    let email = e.target.email.value;
    let telefono = e.target.telefono.value;
    let observacion = e.target.observacion.value;

    if(!validarNombre(nombre) ||
    !validarTelefono(telefono) ||
    !validarEmail(email) ||
    !validarObservacion(observacion)
    ) {
      return Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Algun campo incorrecto',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Observacion enviada.',
        showConfirmButton: false,
        timer: 1500
      })
    }

    let consulta = {
      nombre,
      email,
      telefono,
      observacion
    }

    console.log(consulta)
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center text-success">CONTACTENOS</h1>
      <Row className="mt-4 d-flex justify-content-center" xs={1} md={2}>
        <Col className="border rounded border-5 bg-dark bg-opacity-10 p-4" md={4}>
       <Form className="d-flex flex-column" onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-1"
            >
              <Form.Control
                type="text"
                placeholder="nombre"
                className="mb-2"
                name="nombre"
                maxLength={15}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-2"
            >
              <Form.Control type="email" placeholder="email@hotmail.com" name="email" maxLength={30}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Telefono"
              className="mb-2"
            >
              <Form.Control type="text" placeholder="Telefono" name="telefono" maxLength={7}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Observaciones" className="mb-2">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "130px" }}
                name="observacion"
                maxLength={100}
              />
            </FloatingLabel>
            <Button className="align-self-center w-50 mt-2" type="submit" variant="primary" size="lg">
          Enviar
        </Button>
          </Form>
        </Col>
        <Col className="container mt-5 mt-md-0" md={8}>
        <Iframe
          className="container border rounded border-3 border-primary border-opacity-25"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0840123971507!2d-65.20707305686204!3d-26.837280066707166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1670636030957!5m2!1ses!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;