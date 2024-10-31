import instanceFormData from "../../../axios/instanceFormData";
import { useState } from "react";
import Paginacion from "../paginacion/Paginacion";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import {toast} from "sonner"

const AdminProductos = ( ) => {

  const {tokenUser, setBotonBloquear} = UserHook()
  const {productosHome, obtenerProductos} = ProductosHook()

  let mostrarBarra = true;

  const [arrayBuscar, setArrayBuscar] = useState(null);

  const crearProducto = async (values) => {
  
    setBotonBloquear(true)
    
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
    formData.append("descuento", values.descuento)

    try {
      const resp = await instanceFormData.post("/productos", formData, config);
      obtenerProductos();
      setBotonBloquear(false)
      toast.success(resp.data.msg)
    } catch (error) {
      setBotonBloquear(false)
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center">Administrar Productos</h1>
      <hr/>
        <FormikComponente onSubmit={crearProducto}/>
      <hr />
        {productosHome.length > 0 && (
          <Paginacion
            lista={arrayBuscar ? arrayBuscar : productosHome}
            card="listaProductosAdmin"
            setArrayBuscar={setArrayBuscar}
            mostrarBarra={mostrarBarra}
          />
        )}
    </div>
  );
};

export default AdminProductos;
