import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import ProductoNoEncontrado from "../../../layout/producto no encontrado/ProductoNoEncontrado";
import ContenedorBricksYProducto from "./ContenedorBricksYProducto";

const ComponenteRespuestaCompraProducto = ({}) =>{

    const {errorMercado} = ProductosHook()

    return (
        <div className="col-12">
            {errorMercado !== null ? <ProductoNoEncontrado/>: <ContenedorBricksYProducto/>}
        </div>
    )
}

export default ComponenteRespuestaCompraProducto