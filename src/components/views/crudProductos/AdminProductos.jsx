import instanceFormData from "../../../axios/instanceFormData";
import { useState } from "react";
import Paginacion from "../paginacion/Paginacion";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";

const AdminProductos = ( ) => {

  const [errorImagen, setErrorImagen] = useState(false)

  const {tokenUser, setBotonBloquear} = UserHook()
  const {productosHome, obtenerProductos} = ProductosHook()

  let mostrarBarra = true;

  const [arrayBuscar, setArrayBuscar] = useState([]);

  const crearProducto = async (values, actions) => {

    setBotonBloquear(true)

    if(!values.imagenProducto){
      setBotonBloquear(false)
       return setErrorImagen(true)
    } else {
      setBotonBloquear(false)
      setErrorImagen(false)
    }
    
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    };

    let destacado;
    values.destacarProducto === "Si"
      ? (destacado = true)
      : (destacado = false);

    const formData = new FormData();

    formData.append("nombre", values.nombreProducto);
    formData.append("codigo", values.codigoProducto);
    formData.append("marca", values.marcaProducto);
    formData.append("stock", values.stockProducto);
    formData.append("precio", values.precioProducto);
    formData.append("categoria", values.categoriaProducto);
    formData.append("imagen", values.imagenProducto);
    formData.append("descripcion", values.descripcionProducto);
    formData.append("destacado", destacado);

    try {
      const resp = await instanceFormData.post("/productos", formData, config);
      obtenerProductos();
      console.log(resp.data.msg);
      setBotonBloquear(false)
      actions.resetForm()
    } catch (error) {
      setBotonBloquear(false)
      console.log(error.response.data.msg);
    }
  };

  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center">Administrar Productos</h1>
      <hr/>
        <FormikComponente errorImagen={errorImagen} setErrorImagen={setErrorImagen} onSubmit={crearProducto}/>
      <hr />
        {productosHome.length > 0 ? (
          <Paginacion
            lista={productosHome}
            card="listaProductosAdmin"
            setArrayBuscar={setArrayBuscar}
            arrayBuscar={arrayBuscar}
            mostrarBarra={mostrarBarra}
          />
        ) : (
          ""
        )}
    </div>
  );
};

export default AdminProductos;
