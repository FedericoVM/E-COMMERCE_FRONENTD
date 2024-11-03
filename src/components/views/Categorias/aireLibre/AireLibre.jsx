import ProductosCategorias from "../Productos_categoria";

const AireLibre = ({productos}) => {

    const aireLibre = productos.filter(p => {
      return  p.categoria === "Aire Libre"
     })

  return (
    <div>
        <div className="min-vh-100">
          {productos.length > 0 ? <ProductosCategorias productos={aireLibre} card="categoria"/> :"" }  
        </div>
    </div>
  )
}

export default AireLibre