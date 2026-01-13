import { useEffect, useState } from "react"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import MercadoPagoBricks from "../MercadoPagoBricks"
import ProductoAComprarVista from "./ProductoAComprarVista"
import AnimacionCargando from "../../../layout/animacion cargando/AnimacionCargando";
import {useLocation} from "react-router-dom"
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";

const ContenedorBricksYProducto = () =>{

    const [bricksProductoListo, setBricksProductoListo] = useState(false)
    const [precioFinal, setPrecioFinal] = useState(0)
    const location = useLocation()

    const {productoAComprar} = ProductosHook();
    const {usuarioInfo} = UserHook()

    const calcularPrecioFinal = (producto) =>{
        if(producto.destacado) {
            if(producto.descuento < 10) {
                setPrecioFinal(producto.precio - producto.precio * Number(`0.0${producto.descuento}`))
            } else {
                setPrecioFinal(producto.precio - producto.precio * Number(`0.${producto.descuento}`))
            }
        } else {
            setPrecioFinal(producto.precio)
        }
    }

    useEffect(()=>{
        calcularPrecioFinal(productoAComprar)
    },[productoAComprar])

    return (
        <div className="d-flex flex-column flex-md-row col-12 justify-content-evenly align-items-center my-3 align-items-md-start">
            <div className="col-11 col-md-5">
                <div className={bricksProductoListo ? "d-none" : "d-flex justify-content-center align-items-center align-content-center vh-100"}>
                    {!bricksProductoListo && <AnimacionCargando/>}
                </div>
            <div className={!bricksProductoListo ? "visually-hidden" : ""}>
                {precioFinal !== 0 && <MercadoPagoBricks
                usuarioInfo={usuarioInfo}
                montoTotal={precioFinal} 
                setFormBricksListo={setBricksProductoListo}
                carrito={false}
                />}
            </div>
            </div>
            <ProductoAComprarVista/>
        </div>
    )
}

export default ContenedorBricksYProducto