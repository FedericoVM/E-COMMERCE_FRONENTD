import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"
import ProductosSinStock from "./ProductosSinStock"
import "./errorPago.css"

const ErrorPago = () =>{

    const {errorMercado} = ProductosHook();
console.log(errorMercado);

    return (
        <>
        {errorMercado.request.status === 401 ? <ProductosSinStock/> : <h3>{errorMercado.data.message}</h3>}
        </>
    )
}

export default ErrorPago