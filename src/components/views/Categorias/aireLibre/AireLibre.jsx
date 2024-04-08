import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const AireLibre = ( ) => {

  const {productosHome} = ProductosHook()

    const aireLibre = productosHome.filter(  p => {
      return  p.categoria === "Aire Libre"
     } )
  return (
    <div className="">
        <div className="">
          {productosHome.length > 0 ? <ProductosCategorias productos={aireLibre} card="categoria"/> :"" }  
        </div>
    </div>
  )
}

export default AireLibre