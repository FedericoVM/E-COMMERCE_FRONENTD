import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"

const PrecioConDescuentoCard = ({producto}) =>{

    const {formatPrecioDescuento, productosHome} = ProductosHook()

    return (
        <p className="precio-card border-top w-100 border-warning m-0"><span className="text-success fw-bolder">-{producto.descuento}%</span> {formatPrecioDescuento(productosHome, producto._id)}
        </p>
    )
}

export default PrecioConDescuentoCard