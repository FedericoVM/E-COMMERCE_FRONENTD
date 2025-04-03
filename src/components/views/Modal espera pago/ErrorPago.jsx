import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"
import ProductosSinStock from "./ProductosSinStock"
import "./errorPago.css"

const ErrorPago = ({setShow}) =>{

    const {errorMercado} = ProductosHook();

    return (
        <>
        {errorMercado.request.status === 401 ? <ProductosSinStock/> : <h3>{errorMercado.data.mensaje}</h3>}
        </>
    )
}

export default ErrorPago