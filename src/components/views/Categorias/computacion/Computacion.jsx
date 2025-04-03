import { useEffect, useState } from "react";
import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import CargandoProductos from "../../../layout/cargando productos/CargandoProductos";

const Computacion = ( {productos} ) => {

  const [computacionProductos, setComputacionProductos] = useState([])

  const {filtrarProductosCategoria} = ProductosHook()

  useEffect(()=>{
    filtrarProductosCategoria(productos, setComputacionProductos, "Computacion")
  },[productos])

  return (
    <div className="min-vh-100">
        {computacionProductos.length > 0 ? <ProductosCategorias productos={computacionProductos} card="categoria" categoria={'Computacion'}/> : <CargandoProductos/> }  
    </div>
  )
}

export default Computacion