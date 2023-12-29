import * as yup from "yup"

export const schemaLogin = yup.object().shape({
    email: yup.string().required("Es obligatorio"),
    password: yup.string().required("Es obligatorio")
})