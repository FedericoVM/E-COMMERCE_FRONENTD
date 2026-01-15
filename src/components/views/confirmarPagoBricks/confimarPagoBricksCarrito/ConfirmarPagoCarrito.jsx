import { useEffect, useState } from "react"
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook"
import MercadoPagoBricks from "../MercadoPagoBricks"
import CarritoAComprar from "./CarritoAComprar"
import "./confirmarPagoCarrito.css"
import AnimacionCargando from "../../../layout/animacion cargando/AnimacionCargando"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const ConfirmarPagoCarrito = () =>{

    const [formBricksListo, setFormBricksListo] = useState(false)

    const {costoTotalCarrito} = UserHook()

    const {setBloquearCarritoBotones} = ProductosHook()

    useEffect(()=>{
        setBloquearCarritoBotones(true)
        return () => {setBloquearCarritoBotones(false)}
    },[])

    return (
        <div className="d-flex body-confirmarPagoCarrito justify-content-center align-items-center align-items-md-start justify-content-md-evenly col-12 my-2 flex-column flex-md-row">
            <div className="col-11 col-md-5 col-lg-5 d-flex justify-content-center align-items-center">
                <div className={formBricksListo ? "d-none" : "vh-100 d-flex justify-content-center align-items-center align-content-center"}>
                    {!formBricksListo && <AnimacionCargando/>}
                </div>
            <div className={!formBricksListo ? "d-none" : ""}>
                <MercadoPagoBricks montoTotal={costoTotalCarrito} setFormBricksListo={setFormBricksListo} carrito={true}/>
            </div>
            </div>
            <CarritoAComprar/>
        </div>
    )
}

export default ConfirmarPagoCarrito