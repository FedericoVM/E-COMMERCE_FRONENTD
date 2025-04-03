import { useEffect, useState } from "react"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import PrecioConDescuento from "./PrecioConDescuento"
import PrecioSinDescuento from "./PrecioSinDescuento"

const PreciosDelCarrito = ({producto}) =>{

    const [destacado, setDestacado] = useState(true)

    const {productosHome} = ProductosHook()
    
    const productoDescuento = (productos) =>{
        let productoAEncontrar = productos.find((element) =>{
            return element._id === producto.idProducto
        })

        if(!productoAEncontrar) {
            return setDestacado(false)
        }

        if (productoAEncontrar.destacado === true) {
            setDestacado(true)
        } else {
            setDestacado(false)
        }
    }

    useEffect(()=>{
        productoDescuento(productosHome)
    },[productosHome])

    return (
        <>
            {destacado === true ? <PrecioConDescuento producto={producto}/> : <PrecioSinDescuento producto={producto}/>}
        </>
    )
}

export default PreciosDelCarrito