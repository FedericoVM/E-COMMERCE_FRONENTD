import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import ImagenPreview from "../crudProductos/ImagenPreview";

const CustomImageUser = ({ label, setFieldValue, errors, imagenUsuarioForm}) => {

  const { usuarioInfo, botonBloquear } = UserHook();

  const imgUserRef = useRef();

  return (
    <div className="d-flex flex-column my-1 justify-content-around flex-md-row align-items-center">
      <div className="col-12 justify-content-around mb-2 mb-md-0 col-md-4 d-flex flex-column">
        <Form.Label className="text-center label-imagen-imput-componente mb-3">
          {label}
        </Form.Label>
        <Form.Control
          ref={imgUserRef}
          type="file"
          name="imagenPrueba"
          hidden
          onChange={(e) => {
            setFieldValue("avatar", e.target.files[0]);
          }}
        />
        <div className="d-flex flex-row flex-md-column justify-content-around col-12">
          <Button
            className="btn-avatar col-md-11"
            type="button"
            disabled={botonBloquear}
            onClick={() => {
              imgUserRef.current.click();
            }}
          >
            {usuarioInfo ? "Cambiar imagen" : "Seleccionar Imagen"}
          </Button>
          <Button
            className="my-md-2 btn-quitar-avatar col-md-11"
            disabled={imagenUsuarioForm ? false : true}
            type="button"
            onClick={() => setFieldValue("avatar", "")}
          >
            Quitar Imagen
          </Button>
        </div>
        {errors && <p className="error text-center">{errors}</p>}
      </div>
      <div className="col-12 col-md-7 d-flex justify-content-center">
        {imagenUsuarioForm ? (
          <ImagenPreview file={imagenUsuarioForm} clasName="img-upload img-thumbnail my-2 rounded-circle"/>
        ) : (
          <img
            src={
              usuarioInfo
                ? usuarioInfo.imagen
                : "https://smallimg.pngkey.com/png/small/810-8105695_person-icon-grey-person-icon-grey-png.png"
            }
            className="img-upload img-thumbnail my-2 rounded-circle"
          />
        )}
      </div>
    </div>
  );
};

export default CustomImageUser;
