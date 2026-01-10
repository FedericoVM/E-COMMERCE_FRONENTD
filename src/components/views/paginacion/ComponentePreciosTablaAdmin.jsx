import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"

const ComponentePreciosTablaAdmin = ({producto}) =>{
    const {formatPrecio, formatPrecioDescuento} = ProductosHook()
    return (
        <div className="m-0">
            <div className="m-0 d-flex flex-column-reverse justify-content-evenly align-items-center">
                <p className="m-0 text-success">{producto.descuento}% OFF</p>
                <p className="m-0 admin-producto-tabla-casilla-precio text-decoration-line-through">
                {formatPrecio(producto.precio)}
            </p>
            </div>
            <p className="text-success m-0">
                {formatPrecioDescuento(producto.precio, producto.descuento)}
            </p>
        </div>
    )
}

export default ComponentePreciosTablaAdmin