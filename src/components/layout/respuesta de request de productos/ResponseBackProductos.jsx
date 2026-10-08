import MostrarProductosLg from "../../views/paginacion/MostrarProductosLg"
import Paginacion from "../../views/paginacion/Paginacion"
import ProductoNoEncontrado from "../producto no encontrado/ProductoNoEncontrado"

const ResponseBackProductos = ({productosHome, productosQueryFn}) =>{
    
    return (
        <>
        {productosQueryFn.productos.length > 0 ? <MostrarProductosLg currentPosts={productosQueryFn.productos}/> : <ProductoNoEncontrado/>}
        </>
    )
}

export default ResponseBackProductos