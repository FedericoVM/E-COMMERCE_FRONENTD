import { useState } from "react";
import { Formik, Form } from "formik";
import { schemaCrearProducto } from "../../../validacionesSchema/crearProducto";
import Custominput from "../FormikImputsProductos/CustomImput";
import CustomSelect from "../FormikImputsProductos/CustomSelect";
import CustomInputPrecio from "../FormikImputsProductos/CustomInputPrecio";
import CustomCodigoUnico from "../FormikImputsProductos/CustomInputCodigoUnico";
import CustomImputTexarea from "../FormikImputsProductos/CustomInputTextarea";
import ModalConfirmarProductos from "../Modal para confirmar/ModalConfirmarProductos";
import CustomImputImagen from "../FormikImputsProductos/CustomImputImagen";
import "./componenteProductosForm.css"
import { Link } from "react-router-dom";

const FormikComponente = ({ onSubmit, productoEdit}) => {

  const [inputDescuento, setInputDescuento] = useState("");

  const submitFake = () => {}

  const [productoDestacado] = useState(() => {
    if (productoEdit) {
      if (productoEdit.destacado === true) {
        return "Si"
      } else {
        return "No"
      }
    } else {
      return ""
    }
  })

  const valoresIniciales = () =>{
    return {codigoProducto: productoEdit ? productoEdit.codigo : `${Date.now().toString()}`,
    nombreProducto: productoEdit ? productoEdit.nombre : "",
    marcaProducto: productoEdit ? productoEdit.marca : "",
    stockProducto: productoEdit ? productoEdit.stock : "",
    precioProducto: productoEdit ? productoEdit.precio : "",
    categoriaProducto: productoEdit ? productoEdit.categoria : "",
    descripcionProducto: productoEdit ? productoEdit.descripcion : "",
    destacarProducto: productoEdit ? productoDestacado : "",
    descuento: productoEdit ? productoEdit.descuento : "",
    inputToSchema: productoEdit ? true : false,
    imagenProducto: ""}
  }

  const [initialValuesForm, setInitialValuesForm] = useState(valoresIniciales())

  return (
    <div className="d-flex col-11 col-sm-10 justify-content-center">
      <Formik
        initialValues={initialValuesForm}
        validationSchema={schemaCrearProducto}
        onSubmit={submitFake}
        enableReinitialize
      >
        {({
          values,
          errors,
          setFieldValue,
          resetForm,
          validateForm
        }) => (
          <Form className="form col-12 col-lg-8 d-flex flex-column">
            <Custominput
            name="inputToSchema"
            type="text"
            hidden
            />
            <CustomCodigoUnico
              label="Codigo del Producto (El codigo se genera de manera automatica)"
              name="codigoProducto"
              type="text"
            />
            <Custominput
              label="Nombre del Producto *"
              name="nombreProducto"
              type="text"
            />
            <Custominput
              label="Marca del Producto *"
              name="marcaProducto"
              type="text"
            />
            <Custominput
              label="Stock *"
              name="stockProducto"
              type="number"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <CustomSelect
              label="Categoria del Producto *"
              name="categoriaProducto"
              placeholder="Seleccione una categoria"
            >
              <option value="">Seleccione una categoria</option>
              <option value="Electrodomesticos">Electrodomesticos</option>
              <option value="Computacion">Computacion</option>
              <option value="Aire Libre">Aire Libre</option>
            </CustomSelect>
            <CustomImputTexarea
              label="Descripcion del producto *"
              name="descripcionProducto"
              type="text"
            />
            <CustomInputPrecio
              label="Precio del Producto *"
              name="precioProducto"
              type="number"
              inputDescuento={inputDescuento}
            />
            <CustomSelect label="Destacar Producto" name="destacarProducto" setInputDescuento={setInputDescuento}>
              <option value="">Desea destacar el producto?</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </CustomSelect>
            <CustomImputImagen label="Imagen del producto *"
            name="imagenProducto"
            type="file"
            errors={errors.imagenProducto}
            productoEdit={productoEdit}
            setFieldValue={setFieldValue}
            imagenProducto={values.imagenProducto}
            />
            <div className="d-flex flex-row align-self-center align-self-md-end col-9 col-sm-5 justify-content-evenly col-md-5 mt-3">
              {productoEdit && <Link to={'/admin-productos'} className="boton-atras-editar-producto btn">Atras</Link>}
            <ModalConfirmarProductos onSubmit={onSubmit} valoresIniciales={valoresIniciales} initialValues={values} setInitialValuesForm={setInitialValuesForm} validateForm={validateForm} resetForm={resetForm} productoEdit={productoEdit}/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponente