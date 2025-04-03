import Form from "react-bootstrap/Form";
import { useField } from "formik";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import ImagenPreview from "../crudProductos/ImagenPreview";

const CustomImputImagen = ({ label, errors, setFieldValue, productoEdit, imagenProducto, ...props }) => {
  const [meta] = useField(props);

  const {botonBloquear}= UserHook()

  const imgRef = useRef(null);

  return (
    <div className="d-flex container flex-column justify-content-around flex-md-row align-items-center">
    <div className="col-12 justify-content-around mb-3 mb-md-0 col-md-4 d-flex flex-column">
      <Form.Label className="text-center h6">{label}</Form.Label>
      <Form.Control
        ref={imgRef}
        type="file"
        name="imagenPrueba"
        hidden
        onChange={(e) => {
          setFieldValue("imagenProducto", e.target.files[0]);
        }}
      />
      <div className="d-flex flex-row flex-md-column justify-content-around col-12">
        <Button
          className="my-md-2 boton-seleccionar-imagen-producto"
          type="button"
          disabled={botonBloquear}
          onClick={() => {
            imgRef.current.click();
          }}
        >
          {productoEdit ? "Cambiar imagen" : "Seleccionar Imagen"}
        </Button>
        <Button
        className="boton-quitar-imagen-producto-form"
          disabled={imagenProducto ? false : true}
          type="button"
          onClick={() => setFieldValue("imagenProducto", "")}
        >
          Quitar Imagen
        </Button>
      </div>
      {errors && <p className="error text-center">{errors}</p>}
    </div>
    <div className="col-12 col-md-7 d-flex justify-content-center">
        {imagenProducto ? <ImagenPreview file={imagenProducto} errors={meta.error}/> 
        : 
        <img src={productoEdit? productoEdit.imagen : import.meta.env.VITE_IMG_PRODUCTEDIT} className="imagen-producto-crud img-thumbnail rounded rounded-2"/>}
    </div>
    </div>
  );
};

export default CustomImputImagen;
