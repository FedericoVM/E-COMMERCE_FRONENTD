import { ProductosHook } from "../../../../../context/Contexto de Productos/ProductosHook"

const PrecioDescCardCarritoCompra = ({producto}) =>{

    const {formatPrecio, formatPrecioDescuento} = ProductosHook()

    return (
        <div>
            <div className="d-flex flex-row justify-content-evenly align-items-center m-0">
               
            <p className="m-0 precio-sin-descuento-card-compra">{formatPrecio(producto.precio * producto.cantidad)}</p>
            </div>
            <p className="m-0 precio-con-descuento-card-compra">{formatPrecioDescuento(producto.precio, producto.descuento, producto.cantidad)}</p>
        </div>
    )
}

export default PrecioDescCardCarritoCompra