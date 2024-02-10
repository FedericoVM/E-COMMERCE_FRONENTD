import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instanceFormData from "../../../axios/instanceFormData";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";

const EditarProducto = ({ productos, token,setProductos }) => {

  const [productoEdit, setProductoEdit] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  if (productoEdit === null) {
    const productoFind = productos.find(producto => {
      return producto.codigo === id
    })
    
    if (productoFind !== undefined) {
      setProductoEdit(productoFind)
    }

  }

  const editarProducto = async (values, actions) => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    let destacado; 
    values.destacarProducto === "Si" ? destacado = true : destacado = false;

    const formData = new FormData()

    formData.append('nombre', values.nombreProducto);
    formData.append('codigo', values.codigoProducto);
    formData.append('marca', values.marcaProducto);
    formData.append('stock', values.stockProducto);
    formData.append('precio', values.precioProducto)
    formData.append('categoria', values.categoriaProducto);
    values.imagenProducto && formData.append('imagen', values.imagenProducto);
    formData.append('descripcion', values.descripcionProducto)
    formData.append('destacado', destacado)
    
    try {
      const resp = await instanceFormData.put(`/productos/${productoEdit._id}`,formData,config)
      /*verProductos()*/
      navigate('/admin-productos')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  return (
    <div>
      <h1 className='text-center'>Administrar Productos</h1>
      <hr />
      {productoEdit!==null ? <FormikComponente onSubmit={editarProducto} productoEdit={productoEdit}/>:"Cargando"
    }
    </div>
  )
}

export default EditarProducto