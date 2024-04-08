import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const Electrodomesticos = ( ) => {

  const {productosHome} = ProductosHook()

    const productosElect = productosHome.filter(  p => {
     return  p.categoria === "Electrodomesticos"
    } )

  return (
    <div className="">
        <div className="" >
        {productosHome.length > 0 ? <ProductosCategorias productos={productosElect} card="categoria"/> :"" }  
        </div>
    </div>
  )
}

export default Electrodomesticos