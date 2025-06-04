import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import instance from "../../../axios/instance"
import EsperandoRespuesta from "./espera del servidor/EsperandoRespuesta"
import VerificarRespuesta from "./verificar respuesta/VerificarRespuesta"

const VerificarUsuario = () => {

    const [respuestaRecibida, setRespuestaRecibida] = useState(false)
    const [mensajeOk, setMensajeOk] = useState(null);
    const [mensajeError, setMensajeError] = useState(null)
    const [errorStatus, setErrorStatus] = useState(null)

    const {id, token} = useParams()

    const verificarUser = async(id, token) =>{
        try {
            const verificar = await instance.get(`usuario/${id}/verify/${token}`)
             setRespuestaRecibida(true)
             setMensajeOk(verificar.data.mensaje)
        } catch (error) {
            setErrorStatus(error.response.status)
            setRespuestaRecibida(true)
            setMensajeError(error.response.data.mensaje)
        }
    }

    useEffect(()=>{
        verificarUser(id, token)
    },[])

    return (
        <div className="d-flex justify-content-center">
            {respuestaRecibida !== true ? <VerificarRespuesta mensajeOk={mensajeOk} errorStatus={errorStatus} mensajeError={mensajeError}/> :<EsperandoRespuesta/>}
        </div>
    )
}

export default VerificarUsuario