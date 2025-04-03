import React, { useState } from "react";
import { Formik, Form as FormFormik } from "formik";
import { schemaRegistro } from "../../../validacionesSchema/register";
import CustomInputUser from "../FormitImputsUsers/CustomInputUser";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import ModalConfirmar from "../Modal para confirmar users/ModalConfirmar";
import { Link } from "react-router-dom";
import "./componenteUsuarioProd.css";
import CustomImageUser from "./CustomImageUser";
import CustomFecha from "../FormitImputsUsers/CustomFecha";

const FormikComponenteUsuario = ({ onSubmit }) => {
  const { usuarioInfo } = UserHook();

  const submitFake = () => {};

  const [initiaValuesUser] = useState({
    nombre: usuarioInfo ? usuarioInfo.nombre : "",
    apellido: usuarioInfo ? usuarioInfo.apellido : "",
    fechaDeNacimiento: usuarioInfo ? usuarioInfo.fechaDeNacimiento : "",
    email: usuarioInfo ? usuarioInfo.email : "",
    avatar: "",
    password: "",
    confirmarPassword: "",
    inputBoleanoToSchema: usuarioInfo ? true : false,
  });

  return (
    <div className="d-flex justify-content-center col-11">
      <Formik
        initialValues={initiaValuesUser}
        validationSchema={schemaRegistro}
        onSubmit={submitFake}
      >
        {({ values, errors, setFieldValue, resetForm, validateForm }) => (
          <FormFormik className="d-flex flex-column col-11 col-md-10 form">
            <CustomInputUser
              label={!usuarioInfo ? "Nombre*" : "Nombre"}
              name="nombre"
              type="text"
            />
            <CustomInputUser
              label={!usuarioInfo ? "Apellido*" : "Apellido"}
              name="apellido"
              type="text"
            />
            {!usuarioInfo && <CustomFecha
            label="Dia de nacimiento*"
            name="fechaDeNacimiento"
            type="date"            
            />}
            <CustomInputUser
              label={!usuarioInfo ? "Email*" : "Email"}
              name="email"
              type="email"
            />
            <CustomImageUser
              label="Imagen de Perfil"
              name="avatar"
              type="file"
              errors={errors.avatar}
              setFieldValue={setFieldValue}
              imagenUsuarioForm={values.avatar}
            />
            {!usuarioInfo && (
              <CustomInputUser
                label="Password*"
                name="password"
                type="password"
              />
            )}
            {!usuarioInfo && (
              <CustomInputUser
                label="Confirmar Password *"
                name="confirmarPassword"
                type="password"
              />
            )}
            <div className="d-flex flex-row-reverse justify-content-evenly align-items-center ">
              <ModalConfirmar
                onSubmit={onSubmit}
                resetForm={resetForm}
                validateForm={validateForm}
                values={values}
              />
              {usuarioInfo && (
                <Link
                  to="/cuenta-usuario"
                  className="boton-volver-componente-usuario btn"
                >
                  Volver
                </Link>
              )}
            </div>
          </FormFormik>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponenteUsuario;
