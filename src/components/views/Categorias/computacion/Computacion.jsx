import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const Computacion = ( ) => {
  
  const {productosHome} = ProductosHook()

    const productosComp = productosHome.filter(  p => {
     return  p.categoria === "Computacion"
    } )

  return (
    <div className="">
        <div className="">
        {productosHome.length > 0 ? <ProductosCategorias productos={productosComp} card="categoria"/> :"" }  
        </div>
    </div>
  )
}

export default Computacion