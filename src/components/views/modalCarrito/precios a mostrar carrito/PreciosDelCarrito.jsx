import PrecioConDescuento from "./PrecioConDescuento"
import PrecioSinDescuento from "./PrecioSinDescuento"

const PreciosDelCarrito = ({producto}) =>{

    return (
        <>
            {producto.destacado === true ? <PrecioConDescuento producto={producto}/> : <PrecioSinDescuento producto={producto}/>}
        </>
    )
}

export default PreciosDelCarrito