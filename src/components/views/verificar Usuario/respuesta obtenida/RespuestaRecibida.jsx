import ErrorVerificar from "../error verificar usuario/ErrorVerificar"
import UsuarioVerificado from "../verificado usuario/UsuarioVerificado"

const RespuestaRecibida = ({mensajeOk, mensajeError, errorStatus}) => {

    return (
        <div>
            {mensajeOk ? <UsuarioVerificado mensajeOk={mensajeOk}/> : <ErrorVerificar errorStatus={errorStatus} mensajeError={mensajeError}/>}
        </div>
    )
}

export default RespuestaRecibida