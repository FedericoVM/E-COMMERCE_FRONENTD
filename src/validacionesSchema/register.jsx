import * as yup from "yup";
import {regexContNumber, regexPassword} from "../RegExp/relugarExp";

export const schemaRegistro = yup.object().shape({
  nombre: yup
    .string()
    .min(3, "Minimo 3 caracteres")
    .max(25, "Maximo de 25 caracteres")
    .matches(regexContNumber, { message: "El nombre no debe tener numeros." })
    .required("El nombre es requerido"),
  apellido: yup
    .string()
    .min(3, "Minimo 3 caracteres")
    .max(25, "Maximo de 25 caracteres")
    .matches(regexContNumber, { message: "El apellido no debe tener numeros." })
    .required("El apellido es requerido"),
    edad: yup
    .number()
    .positive()
    .integer(),
    fechaDeNacimiento: yup
    .date()
    .when('inputBoleanoToSchema', {
      is: false,
      then: () => yup.date()
      .required("Este campo es requerido")
    }),
    email: yup
    .string()
    .email("Ingrese un email valido.")
    .required("Email Requerido."),
    avatar: yup
    .mixed()
    .test("FILE_SIZE", "La imagen es muy grande.",(value) => !value || value.size <= 1024 * 1024)
    .test("FILE_TYPE", "Solo archivos .png o .jpeg",(value) => !value || ['image/png', 'image/jpeg'].includes(value.type)),
    password: yup
    .string()
    .when('inputBoleanoToSchema', {
      is: false,
      then: () => yup.string()
      .min(5)
      .matches(regexPassword, {message: "Al menos 1 letra mayuscula, minuscula, numero y caracter especial"})
      .required("Este campo es requerido")
    }),
    confirmarPassword: yup
    .string()
    .when('inputBoleanoToSchema', {
      is: false,
      then: () => yup.string()
      .oneOf([yup.ref("password"), null], "Las contrasenias no coinciden")
      .required("Este campo es requerido")
    }),
    inputBoleanoToSchema:yup
    .boolean()
});
