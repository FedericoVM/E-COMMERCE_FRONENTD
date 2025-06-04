import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instanceFormData from "../../../axios/instanceFormData";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import {toast} from "sonner"
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";

const EditarProducto = ( ) => {

  const {tokenUser, setBotonBloquear} = UserHook()
  const {productosHome, obtenerProductos} = ProductosHook()

  const [productoEdit, setProductoEdit] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  if (productoEdit === null) {
    const productoFind = productosHome.find(producto => {
      return producto._id === id
    })
    
    if (productoFind !== undefined) {
      setProductoEdit(productoFind)
    }
  }

  const editarProducto = async (values) => {

    setBotonBloquear(true)

    const config = {
      headers: {
        "Authorization": `Bearer ${tokenUser}`
      }
    }

    let destacado; 
    values.destacarProducto === "Si" ? destacado = true : destacado = false;

    const formData = new FormData()

    formData.append('nombre', values.nombreProducto);
    formData.append('marca', values.marcaProducto);
    formData.append('stock', values.stockProducto);
    formData.append('precio', values.precioProducto)
    formData.append('categoria', values.categoriaProducto);
    values.imagenProducto && formData.append('imagen', values.imagenProducto);
    formData.append('descripcion', values.descripcionProducto)
    formData.append('destacado', destacado)
    formData.append(`descuento`,values.descuento)

    try {
      const resp = await instanceFormData.put(`/productos/${productoEdit._id}`,formData,config)
      obtenerProductos()
      setBotonBloquear(false)
      toast.success(resp.data.msg)
      navigate('/admin-productos')
    } catch (error) {
      setBotonBloquear(false)
      toast.error(error.response.data.msg)
    }
  }
  
  return (
    <div className="d-flex flex-column justify-content-center col-12 align-items-center">
      <h1 className='text-center'>Administrar Productos</h1>
      <hr />
      {productoEdit!==null ? <FormikComponente onSubmit={editarProducto} productoEdit={productoEdit}/> : <CargandoProductos/>
    }
    </div>
  )
}

export default EditarProducto