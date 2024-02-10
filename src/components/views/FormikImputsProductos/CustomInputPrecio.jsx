import { useField } from "formik";
import { useEffect, useState } from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FoatingLabel from "react-bootstrap/FloatingLabel";

const CustomInputPrecio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [inputPrecio, setInputPrecio] = useState("");

  useEffect(() => {
    setInputPrecio(field.value);
  }, [field.value]);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Group as={Row} className="mb-3">
        <Col sm="3">
          <Form.Control
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
              value={Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(inputPrecio)}
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