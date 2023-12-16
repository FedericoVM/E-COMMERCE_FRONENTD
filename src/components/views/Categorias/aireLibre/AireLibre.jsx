import ProductosCategorias from "../Productos_categoria";

const AireLibre = ({productos,token,listaCarrito}) => {
    const aireLibre = productos.filter(  p => {
      return  p.categoria === "Aire Libre"
     } )
  return (
    <div className="">
        <div className="">
          {productos.length > 0 ? <ProductosCategorias productos={aireLibre} card="categoria" token={token} listaCarrito={listaCarrito} /> :"" }  
        </div>
    </div>
  )
}

export default AireLibre