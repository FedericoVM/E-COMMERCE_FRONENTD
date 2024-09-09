import * as yup from "yup"
import {regexPassword} from "../RegExp/relugarExp"

export const recuperacionPassword = yup.object().shape({
    password: yup
    .string()
    .min(5)
    .matches(regexPassword, {message: "Al menos 1 mayuscula, minuscula, numero y caracter especial."})
    .required("La contrasenia es requerida."),
    confirmarPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contrasenias no coinciden")
    .required("Repita la contrasenia")
}
)