import Button from "react-bootstrap/Button";
import { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import { schemaCrearProducto } from "../../../validacionesSchema/crearProducto";
import Custominput from "../FormikImputsProductos/CustomImput";
import CustomSelect from "../FormikImputsProductos/CustomSelect";
import CustomInputPrecio from "../FormikImputsProductos/CustomInputPrecio";
import CustomCodigoUnico from "../FormikImputsProductos/CustomInputCodigoUnico";
import ImagenPreview from "../crudProductos/ImagenPreview";
import CustomImputTexarea from "../FormikImputsProductos/CustomInputTextarea";

const FormikComponente = ({onSubmit, productoEdit, errorImagen, setErrorImagen}) => {
  
  const imagenRef = useRef(null);

    const [productoDestacado, setProductoDestacado] = useState(()=> {
      if(productoEdit){
        if(productoEdit.destacado === true){
          return "Si"
        } else {
          return "No"
        }
      } else {
        return ""
      }
    })

    const [initialValues, setInitialValues] = useState({
        codigoProducto: productoEdit? productoEdit.codigo : Date.now().toString(),
            nombreProducto: productoEdit? productoEdit.nombre : "",
            marcaProducto: productoEdit? productoEdit.marca : "",
            stockProducto: productoEdit? productoEdit.stock : "",
            precioProducto: productoEdit? productoEdit.precio : "",
            categoriaProducto: productoEdit? productoEdit.categoria : "",
            descripcionProducto: productoEdit? productoEdit.descripcion :"",
            destacarProducto: productoEdit?   productoDestacado : "",
            imagenProducto : ""
    }) 
    
useEffect(()=>{
  if(errorImagen){
    setErrorImagen(false)
  }
},[productoEdit])

    return (
        <div className="d-flex justify-content-center">
        <Formik
          initialValues={initialValues}
          validationSchema={schemaCrearProducto}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({
            values,
            isSubmitting,
            errors,
            touched,
            setValues,
            setFieldValue,
            resetForm
          }) => (
            <Form className="form col-11 col-lg-8 d-flex flex-column">
              <CustomCodigoUnico
                label="Codigo del Producto (El codigo se genera de manera automatica)"
                name="codigoProducto"
                type="text"
              />
              <Custominput
                label="Nombre del Producto"
                name="nombreProducto"
                type="text"
              />
              <Custominput
                label="Marca del Producto"
                name="marcaProducto"
                type="text"
              />
              <Custominput
                label="Stock"
                name="stockProducto"
                type="number"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <CustomInputPrecio
                label="Precio del Producto"
                name="precioProducto"
                type="number"
              />
              <CustomSelect
                label="Categoria del Producto"
                name="categoriaProducto"
                placeholder="Seleccione una categoria"
              >
                <option value="">Seleccione una categoria</option>
                <option value="Electrodomesticos">Electrodomesticos</option>
                <option value="Computacion">Computacion</option>
                <option value="Aire Libre">Aire Libre</option>
              </CustomSelect>
              <CustomImputTexarea
                label="Descripcion del producto"
                name="descripcionProducto"
                type="text"
              />
              <CustomSelect label="Destacar Producto" name="destacarProducto">
                <option value="">Desea destacar el producto?</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </CustomSelect>
              <div className="d-flex container flex-column justify-content-around flex-md-row align-items-center">
                <div className="col-12 justify-content-around col-md-4 d-flex flex-column">
                  <label className="text-center h6">Imagen del producto</label>
                  <input
                    ref={imagenRef}
                    type="file"
                    hidden
                    onChange={(e) => {
                      setFieldValue("imagenProducto", e.target.files[0]);
                      errorImagen && setErrorImagen(false)
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
                    {productoEdit? "Cambiar imagen" : "Seleccionar Imagen"}
                  </Button>
                  <Button variant={values.imagenProducto ? "info":"outline-info"} disabled={values.imagenProducto ? false : true} type="button" onClick={() => setFieldValue('imagenProducto', "")}>Quitar Imagen</Button>
                  </div>
                  {errors.imagenProducto && touched.imagenProducto && (
                    <p className="error text-center">{errors.imagenProducto}</p>
                  )}
                  {errorImagen === true && <p className="error text-center">La imagen es necesaria</p>}
                  </div>
               <div className="col-12 col-md-8 d-flex justify-content-center">
                  {values.imagenProducto ? (
                    <ImagenPreview file={values.imagenProducto} />
                  ) : (
                    <img
                      src={productoEdit? productoEdit.imagen:"https://prints.ultracoloringpages.com/41c7eca8b52201bc147a0bc8da846e60.png"}
                      className="img-upload img-thumbnail rounded rounded-5"
                    />
                  )}
                </div>
              </div>
              <Button disabled={isSubmitting} type="submit">
                Guardar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
}

export default FormikComponente