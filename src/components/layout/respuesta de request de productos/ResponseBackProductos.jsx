import Paginacion from "../../views/paginacion/Paginacion"
import ProductoNoEncontrado from "../producto no encontrado/ProductoNoEncontrado"

const ResponseBackProductos = ({productosHome}) =>{
    
    return (
        <>
        {productosHome.length > 0 ? <Paginacion lista={productosHome} card={"card"}/> : <ProductoNoEncontrado/>}
        </>
    )
}

export default ResponseBackProductos