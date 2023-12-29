import ProductosCategorias from "../Productos_categoria";


const Computacion = ({productos,token,listaCarrito}) => {
    

    const productosComp = productos.filter(  p => {
     return  p.categoria === "Computacion"
    } )

  return (
    <div className="">
        <div className="">
        {productos.length > 0 ? <ProductosCategorias productos={productosComp} card="categoria" token={token} listaCarrito={listaCarrito} /> :"" }  
        </div>
    </div>
  )
}

export default Computacion