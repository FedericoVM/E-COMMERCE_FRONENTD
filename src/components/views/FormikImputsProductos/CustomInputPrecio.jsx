import { useField } from "formik";
import { useEffect, useState } from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputPrecio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [inputPrecio, setInputPrecio] = useState("");

  const {formatPrecio} = ProductosHook()
  const {botonBloquear} = UserHook()

  useEffect(() => {
    setInputPrecio(field.value);
  }, [field.value]);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Group as={Row} className="mb-3">
        <Col sm="3">
          <Form.Control
          disabled={botonBloquear}
            sm="2"
            className="h-100"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            {...field}
            {...props}
          />
        </Col>
        <Col sm="3">
          <FloatingLabel controlId="floatingSelect" label="Previsualisacion">
            <Form.Control
              className=""
              sm="2"
              type="text"
              value={formatPrecio(inputPrecio)}
              disabled={true}
            />
          </FloatingLabel>
        </Col>
      </Form.Group>
      {meta.touched && meta.error && (
        <div className="text-validation">{meta.error}</div>
      )}
    </>
  );
};

export default CustomInputPrecio;