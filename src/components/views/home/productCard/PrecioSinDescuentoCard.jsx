import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"

const PrecioSinDescuentoCard= ({producto}) => {

    const {formatPrecio} = ProductosHook()

    return (
        <p className="precio-card m-0 border-top w-100 border-warning">{formatPrecio(producto.precio)}</p>
    )
}

export default PrecioSinDescuentoCard