import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"

const PrecioConDescuentoCard = ({producto}) =>{

    const {formatPrecioDescuento} = ProductosHook()

    return (
        <p className="precio-card border-top w-100 border-warning m-0"><span className="text-success fw-bolder">-{producto.descuento}%</span> {formatPrecioDescuento(producto.precio, producto.descuento)}
        </p>
    )
}

export default PrecioConDescuentoCard