import { useEffect, useState } from "react";
import CargandoProductos from "../../../layout/cargando productos/CargandoProductos";
import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const AireLibre = ({productos}) => {

  const [aireLibreProductos, setAireLibreProductos] = useState([])

  const {filtrarProductosCategoria} = ProductosHook()
   
  useEffect(()=>{
    filtrarProductosCategoria(productos, setAireLibreProductos, "Aire Libre")
  },[productos])

  return (
    <div>
        <div className="min-vh-100">
          {aireLibreProductos.length > 0 ? <ProductosCategorias productos={aireLibreProductos} card="categoria" categoria={'Aire Libre'}/> :<CargandoProductos/> }  
        </div>
    </div>
  )
}

export default AireLibre