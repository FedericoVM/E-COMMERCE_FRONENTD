import ProductosCategorias from "./Productos_categoria";

const AireLibre = ({products}) => {
  const aireLibre = products.filter(productos => {
    return productos.categoria === "aire libre"
  })
  return (
    <div className="">
        <div className="">
            <ProductosCategorias products={aireLibre}/>
        </div>
    </div>
  )
}

export default AireLibre