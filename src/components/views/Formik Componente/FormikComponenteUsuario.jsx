import React, { useRef, useState } from "react";
import Form from 'react-bootstrap/Form'
import {Formik, Form as FormFormik} from "formik";
import Button from 'react-bootstrap/Button'
import { Image } from 'react-bootstrap'
import { schemaRegistro } from "../../../validacionesSchema/register";
import CustomInputUser from "../FormitImputsUsers/CustomInputUser";
import CustomInputEdad from "../FormitImputsUsers/CustomInputEdad";
import ImagenPreviewUser from "../FormitImputsUsers/ImagenPreviewUser";

const FormikComponenteUsuario = ({onSubmit, datosUsuario, passwordRequerida, confirmarPasswordRequerida}) => {

  const imagenRef = useRef(null)

    const [initialValues, setInitialValues] = useState({
        nombre : datosUsuario ? datosUsuario.nombre : "",
        apellido : datosUsuario ? datosUsuario.apellido : "",
        edad : datosUsuario ? datosUsuario.edad : "",
        email: datosUsuario ? datosUsuario.email : "",
        avatar : "",
        password : "",
        confirmarPassword: ""
    })

  return (
    <div className="d-flex justify-content-center">
      <Formik
      initialValues={initialValues}
      validationSchema={schemaRegistro}
      onSubmit={onSubmit}>
        {({
          values,
          isSubmiting,
          errors,
          touched,
          handleChange,
          setFieldValue
        }) => (
          <FormFormik className="d-flex flex-column col-11 col-md-8 form">
            <CustomInputUser
            label = "Nombre"
            name = "nombre"
            type = "text"
            />
            <CustomInputUser
            label = "Apellido"
            name = "apellido"
            type = "text"
            />
            <CustomInputEdad
            label = "Edad"
            name = "edad"
            type = "number"
            />
            <CustomInputUser
            label = "Email"
            name = "email"
            type = "email" 
            />
             <div className="d-flex flex-column my-1 justify-content-around flex-md-row align-items-center">
                <div className="col-12 justify-content-around col-md-4 d-flex flex-column">
                  <label className="text-center h6 mb-3">Imagen de Perfil</label>
                  <input
                    ref={imagenRef}
                    type="file"
                    hidden
                    onChange={(e) => {
                      setFieldValue("avatar", e.target.files[0]);
                    }}
                  />
                  <div className="d-flex flex-row flex-md-column justify-content-around col-12">
                  <Button
                  variant="outline-success"
                    type="button"
                    onClick={() => {
                      imagenRef.current.click();
                    }}
                  >
                    {datosUsuario? "Cambiar avatar" : "Seleccionar avatar"}
                  </Button>
                  <Button variant={values.avatar ? "info":"outline-info"} disabled={values.avatar ? false : true} type="button" onClick={() => setFieldValue('avatar', "")}>Quitar Imagen</Button>
                  </div>
                  {errors.avatar && touched.avatar && (
                    <p className="error text-center">{errors.avatar}</p>
                  )}
                  </div>
               <div className="col-12 col-md-7 d-flex justify-content-center">
                  {values.avatar ? (
                    <ImagenPreviewUser file={values.avatar} />
                  ) : (
                    <Image
                    roundedCircle
                      src={datosUsuario? datosUsuario.imagen:"https://smallimg.pngkey.com/png/small/810-8105695_person-icon-grey-person-icon-grey-png.png"}
                      className="img-upload img-thumbnail my-3"
                    />
                  )}
                </div>
              </div>
              {!datosUsuario &&
              <div>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} value={values.password} className={errors.password || passwordRequerida ? "border mb-3 border-danger border-1 shadow-lg border-opacity-75" : "mb-3"} type="password" name="password"/>
                {errors.password && <div className="text-validation">{errors.password}</div>}
              </div>
              }
              {passwordRequerida === true && <p className="error text-center">La contrasenia es necesaria</p>}
              {!datosUsuario &&
              <CustomInputUser
              label = "Confirmar Password"
              name = "confirmarPassword"
              type = "password"
              />
            }
            {confirmarPasswordRequerida === true && <p className="error text-center">Requiere confimar la contrasenia</p>}
            <Button disabled={isSubmiting} className="w-25 align-self-center" type="submit">{datosUsuario ? "Guardar": "Registrarse"}</Button>
          </FormFormik>
        )}
      </Formik>
    </div>
  );
              }

export default FormikComponenteUsuario