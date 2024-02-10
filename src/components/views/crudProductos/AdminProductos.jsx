import instanceFormData from "../../../axios/instanceFormData";
import { useEffect, useState } from "react";
import Paginacion from "../paginacion/Paginacion";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";
import { useNavigate } from "react-router-dom";

const AdminProductos = ({ productos, token, setProductos, verProductos }) => {

  const [errorImagen, setErrorImagen] = useState(false)

  let mostrarBarra = true;

  const [arrayBuscar, setArrayBuscar] = useState([]);

  const crearProducto = async (values, actions) => {

    if(!values.imagenProducto){
       return setErrorImagen(true)
    } else {
      setErrorImagen(false)
    }
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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
      verProductos();
      console.log(resp.data.msg);
      actions.resetForm()
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    verProductos();
  }, []);

  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center">Administrar Productos</h1>
      <hr/>
        <FormikComponente errorImagen={errorImagen} setErrorImagen={setErrorImagen} onSubmit={crearProducto}/>
      <hr />
        {productos.length > 0 ? (
          <Paginacion
            lista={productos}
            card="listaProductosAdmin"
            token={token}
            setProductos={setProductos}
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
