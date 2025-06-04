import { useField } from "formik";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputPrecio = ({ label,inputDescuento, productoDestacado,...props }) => {
  const [field, meta] = useField(props);
  const [inputPrecio, setInputPrecio] = useState("");

  const { formatPrecio } = ProductosHook()
  const { botonBloquear } = UserHook()

  useEffect(() => {
    setInputPrecio(field.value);
  }, [field.value]);
  return (
    <div className="col-12 d-flex flex-column justify-content-between">
      <Form.Group className="mb-3 col-12 d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <div className="col-12 col-sm-4">
        <Form.Label>{label}</Form.Label>
          <Form.Control
            disabled={botonBloquear}
            className="col-12 col-sm-4"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            {...field}
            {...props}
          />
        </div>
        <div className="my-2 col-12 col-sm-6 my-sm-0">
          <Form.Label>Previsualisacion</Form.Label>
            <Form.Control
              className="col-12"
              type="text"
              value={productoDestacado === "Si" ? formatPrecio( inputDescuento < 71 && inputPrecio -  (inputPrecio * (inputDescuento/100))): formatPrecio(inputPrecio)}
              disabled={true}
            />
        </div>
      </Form.Group>
      {meta.touched && meta.error && (
        <div className="text-validation">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomInputPrecio;