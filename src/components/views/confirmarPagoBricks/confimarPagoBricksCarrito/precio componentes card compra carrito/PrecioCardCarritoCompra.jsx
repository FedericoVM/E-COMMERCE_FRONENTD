import { ProductosHook } from "../../../../../context/Contexto de Productos/ProductosHook"

const PrecioCardCarritoCompra = ({producto}) =>{

    const {formatPrecio} = ProductosHook()

    return (
        <p className="precio-card-no-destacado-compra m-0">{formatPrecio(producto.precio * producto.cantidad)}</p>
    )
}

export default PrecioCardCarritoCompra