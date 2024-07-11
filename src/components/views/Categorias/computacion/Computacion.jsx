import ProductosCategorias from "../Productos_categoria";

const Computacion = ( {productos} ) => {

    const productosComp = productos.filter(  p => {
     return  p.categoria === "Computacion"
    } )

  return (
    <div>
        {productos.length > 0 ? <ProductosCategorias productos={productosComp} card="categoria"/> :"" }  
    </div>
  )
}

export default Computacion