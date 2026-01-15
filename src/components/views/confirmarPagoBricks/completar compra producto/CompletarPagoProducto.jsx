import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import CargandoProductos from "../../../layout/cargando productos/CargandoProductos"
import "./completarPagoProducto.css"
import ComponenteRespuestaCompraProducto from "./ComponenteRespuestaCompraProducto"

const CompletarPagoProducto = () =>{

    const [respuestaBack, setRespuestaBack] = useState(false)

    const {id} = useParams()
    const {tokenUser} = UserHook()
    const {comprarProducto} = ProductosHook()

    useEffect(()=>{
         comprarProducto({idProducto:id, tokenUser, setState:setRespuestaBack})
    },[])

    return (
        <div className="contenedor-completar-pago-producto d-flex col-12">
            {respuestaBack ? 
            <ComponenteRespuestaCompraProducto/> : <CargandoProductos/>}
        </div>
    )
}

export default CompletarPagoProducto