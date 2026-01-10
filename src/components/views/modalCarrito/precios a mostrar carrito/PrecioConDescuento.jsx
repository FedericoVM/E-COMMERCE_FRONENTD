import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"

const PrecioConDescuento = ({producto}) =>{

    const {formatPrecio, formatPrecioDescuento, productosHome} = ProductosHook()

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <div className="d-flex flex-row justify-content-evenly w-75 align-items-center">
            <p className="fs-5 text-success m-0 p-0">-{producto.descuento !== "No Disponible" ? `%${producto.descuento}`:producto.descuento}</p>
            <p className="m-0 fs-6 text-black-50 text-decoration-line-through">{producto.precio !== "" ?formatPrecio(producto.precio * producto.cantidad): producto.precio}</p>
            </div>
            <p className="fs-5 text-black text-opacity-75 m-0 p-0">{producto.precio !== "No Disponible" ?formatPrecioDescuento(producto.precio, producto.descuento, producto.cantidad): producto.precio}</p>
        </div>
    )
}

export default PrecioConDescuento