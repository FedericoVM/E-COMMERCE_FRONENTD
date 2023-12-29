
import ProductosCategorias from "../Productos_categoria";

const Electrodomesticos = ({productos,token,listaCarrito}) => {


    const productosElect = productos.filter(  p => {
     return  p.categoria === "Electrodomesticos"
    } )

  return (
    <div className="">
        <div className="" >
        {productos.length > 0 ? <ProductosCategorias productos={productosElect} card="categoria" token={token} listaCarrito={listaCarrito} /> :"" }  
        </div>
    </div>
  )
}

export default Electrodomesticos