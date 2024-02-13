import * as yup from "yup";
import { regexCaracterEspeciales } from "../RegExp/relugarExp";

export const schemaCrearProducto = yup.object().shape({
    nombreProducto: yup
    .string()
    .min(5, "Nombre del producto muy corto")
    .max(70, "Nombre del producto muy largo")
    .required("El nombre es requerido"),
    marcaProducto: yup
    .string()
    .max(25, "Los caracteres de la marca son muy largos")
    .matches(regexCaracterEspeciales, {message: "Este campo no debe tener caracteres especiales"})
    .required("Este campo es requerido"),
    stockProducto: yup
    .number()
    .min(5, "El minimo es de 5")
    .max(100, "El maximo es de 100")
    .required("El Stock es requerido"),
    precioProducto: yup
    .number()
    .max(99999999, "Maximo de 8 digitos")
    .min(99, "Minimo de 3 digitos")
    .required("El precio es requerido"),
    categoriaProducto: yup
    .string()
    .required("La categoria es requerida"),
    descripcionProducto: yup
    .string()
    .min(30, "Minimo de 30 caracteres")
    .max(2000, "Maximo de 550 caracteres")
    .required(),
    destacarProducto: yup
    .string(),
    imagenProducto: yup
    .mixed()
    .test("FILE_SIZE", "La imagen es muy grande.",(value) => !value || value.size <= 1024 * 1024)
    .test("FILE_TYPE", "Solo archivos .png o .jpeg",(value) => !value || ['image/png', 'image/jpeg'].includes(value.type))
})