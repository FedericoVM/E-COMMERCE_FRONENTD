import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormFormik } from "formik";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { schemaRegistro } from "../../../validacionesSchema/register";
import CustomInputUser from "../FormitImputsUsers/CustomInputUser";
import CustomInputEdad from "../FormitImputsUsers/CustomInputEdad";
import ImagenPreviewUser from "../FormitImputsUsers/ImagenPreviewUser";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import "./componenteUsuarioProd.css";

const FormikComponenteUsuario = ({
  onSubmit,
  passwordRequerida,
  confirmarPasswordRequerida,
}) => {
  const { usuarioInfo, botonBloquear } = UserHook();
  const imagenRef = useRef(null);

  const [initialValues, setInitialValues] = useState({
    nombre: usuarioInfo ? usuarioInfo.nombre : "",
    apellido: usuarioInfo ? usuarioInfo.apellido : "",
    edad: usuarioInfo ? usuarioInfo.edad : "",
    email: usuarioInfo ? usuarioInfo.email : "",
    avatar: "",
    password: "",
    confirmarPassword: "",
  });

  return (
    <div className="d-flex justify-content-center">
      <Formik
        initialValues={initialValues}
        validationSchema={schemaRegistro}
        onSubmit={onSubmit}
      >
        {({
          values,
          isSubmiting,
          errors,
          touched,
          handleChange,
          setFieldValue,
        }) => (
          <FormFormik className="d-flex flex-column col-11 col-md-10 form">
            <CustomInputUser label="Nombre" name="nombre" type="text" />
            <CustomInputUser label="Apellido" name="apellido" type="text" />
            <CustomInputEdad label="Edad" name="edad" type="number" />
            <CustomInputUser label="Email" name="email" type="email" />
            <div className="d-flex flex-column my-1 justify-content-around flex-md-row align-items-center">
              <div className="col-12 justify-content-around align-items-center col-md-4 d-flex flex-column">
                <label className="text-center mb-3">Foto de Perfil</label>
                <input
                  ref={imagenRef}
                  type="file"
                  hidden
                  disabled={botonBloquear}
                  onChange={(e) => {
                    setFieldValue("avatar", e.target.files[0]);
                  }}
                />
                <div className="d-flex flex-column  justify-content-around align-items-center col-6 col-md-12 gap-2">
                  <Button
                    className="btn-avatar text-white"
                    variant="btn"
                    type="button"
                    disabled={botonBloquear}
                    onClick={() => {
                      imagenRef.current.click();
                    }}
                  >
                    {usuarioInfo ? "Cambiar avatar" : "Seleccionar avatar"}
                  </Button>
                  <Button
                    type="button"
                    variant={values.avatar ? "info" : "outline-info"}
                    disabled={values.avatar ? false : true}
                    onClick={() => setFieldValue("avatar", "")}
                  >
                    Quitar Imagen
                  </Button>
                </div>
                {errors.avatar && touched.avatar && (
                  <p className="error text-center">{errors.avatar}</p>
                )}
              </div>
              <div className="col-7 col-sm-5 col-md-auto d-flex justify-content-center h-50 my-2">
                {values.avatar ? (
                  <ImagenPreviewUser file={values.avatar} />
                ) : (
                  <Image
                    roundedCircle
                    src={
                      usuarioInfo
                        ? usuarioInfo.imagen
                        : "https://smallimg.pngkey.com/png/small/810-8105695_person-icon-grey-person-icon-grey-png.png"
                    }
                    className="img-upload img-thumbnail w-100 h-100"
                  />
                )}
              </div>
            </div>
            {!usuarioInfo && (
              <div>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  disabled={botonBloquear}
                  onChange={handleChange}
                  value={values.password}
                  className={
                    errors.password || passwordRequerida
                      ? "border mb-3 border-danger border-1 shadow-lg border-opacity-75"
                      : "mb-3"
                  }
                  type="password"
                  name="password"
                />
                {errors.password && (
                  <div className="text-validation">{errors.password}</div>
                )}
              </div>
            )}
            {passwordRequerida === true && (
              <p className="error text-center">La contraseña es necesaria</p>
            )}
            {!usuarioInfo && (
              <CustomInputUser
                label="Confirmar contraseña"
                name="confirmarPassword"
                type="password"
              />
            )}
            {confirmarPasswordRequerida === true && (
              <p className="error text-center">
                Requiere confimar la contraseña
              </p>
            )}
            <Button
              disabled={botonBloquear}
              className="col-6 align-self-center my-2"
              type="submit"
            >
              {usuarioInfo ? "Guardar" : "Registrarse"}
            </Button>
          </FormFormik>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponenteUsuario;
