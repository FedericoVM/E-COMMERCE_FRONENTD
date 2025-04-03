import * as yup from "yup";
import { regexCaracterEspeciales } from "../RegExp/relugarExp";

const zizeFile = (value) =>{ return !value || value.size <= 1024 * 1024}

const typeFile = (value) => { return !value || ['image/png', 'image/jpeg'].includes(value.type)}

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
    .min(0, "El numero no puede ser negativo")
    .required("El Stock es requerido")
    .when('inputToSchema', {
        is: false,
        then: ()=> yup.number()
        .min(3, "El minimo es de 3")
        .required('El campo es obligatorio.')
    }),
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
    .required("La descripcion es requerida"),
    destacarProducto: yup
    .string(),
    descuento: yup
    .number()
    .when('destacarProducto',{
        is: "Si",
        then: () => yup.number()
        .min(1,"El minimo es de 1%")
        .max(70,"El maximo es 70%")
        .required('El campo es obligatorio'),
        otherwise: () => yup
        .number()
        .nullable()
    }),
    inputToSchema: yup
    .boolean(),
    imagenProducto: yup
    .mixed()
    .test("FILE_SIZE", "La imagen es muy grande.",(value) => zizeFile(value))
    .test("FILE_TYPE", "Solo archivos .png o .jpeg",(value) => typeFile(value))
    .when('inputToSchema', {
        is: false,
        then: ()=> yup.mixed()
        .test("FILE_SIZE", "La imagen es muy grande.",(value) => zizeFile(value))
        .test("FILE_TYPE", "Solo archivos .png o .jpeg",(value) => typeFile(value))
        .required('El campo es obligatorio.')
    })
})