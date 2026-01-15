import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook"
import CardProductosCarritoAComprar from "./CardProductosCarritoAComprar"

const CarritoAComprar = () =>{

    const {formatPrecio} = ProductosHook()
    const {costoTotalCarrito, usuarioCarrito} = UserHook()

    return (
        <div className="p-1 col-11 col-md-6 col-lg-5 d-flex flex-column contenedor-card-carrito-a-comprar">
            <p className="text-center titulo-carrito-a-comprar">Precio Final: {formatPrecio(costoTotalCarrito)}</p>
            <div className="overflow-auto productos-mapeados-a-comprar">
            {usuarioCarrito.map((producto, index)=><CardProductosCarritoAComprar producto={producto} key={index}/>)}
            </div>
        </div>
    )
}

export default CarritoAComprar