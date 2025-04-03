import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"

const PrecioSinDescuento = ({producto}) =>{

    const {formatPrecio} = ProductosHook()

    return (
        <div>
            <p className="m-0 fs-5 text-black text-opacity-75">{producto.precio === "No Disponible" ? producto.precio : formatPrecio(producto.precio * producto.cantidad)}</p>
        </div>
    )
}

export default PrecioSinDescuento