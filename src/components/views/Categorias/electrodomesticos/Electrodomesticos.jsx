
import ProductosCategorias from "../Productos_categoria";

const Electrodomesticos = ({productos}) => {


    const productosElect = productos.filter(  p => {
     return  p.categoria === "Electrodomesticos"
    } )

  return (
    <div className="">
        <div className="" >
        {productos.length > 0 ? <ProductosCategorias productos={productosElect} card="categoria" /> :"" }  
        </div>
    </div>
  )
}

export default Electrodomesticos