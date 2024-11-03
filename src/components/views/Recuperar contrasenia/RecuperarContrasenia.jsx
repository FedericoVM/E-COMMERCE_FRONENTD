import { useNavigate, useParams } from "react-router-dom"
import ComponenteNuevoPass from "../../layout/componente recuperar contrasenia/ComponenteNuevoPass"
import { regexPassword } from "../../../RegExp/relugarExp"
import instance from "../../../axios/instance"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook"

const RecuperarContrasenia = () =>{
    const {token} = useParams()

    const {setBotonBloquear} = UserHook()

    const navigate = useNavigate()
    
    const handleNuevaContrasenia = async (e) => {

        setBotonBloquear(true)

        let contrasenia = e.password

        let nuevaContrasenia = {
            password : contrasenia
        }

        try {
            const resp = await instance.put(`/usuario/cambiar-contrasenia/${token}`, nuevaContrasenia)
            console.log(resp.data.mensaje);
            setBotonBloquear(false)
            navigate('/')
        } catch (error) {
            setBotonBloquear(false)
            return console.log(error.response.data.mensaje);
        }
    }
    return (
        <div>
            <ComponenteNuevoPass handleCambiarContrasenia={handleNuevaContrasenia}/>
        </div>
    )
}

export default RecuperarContrasenia