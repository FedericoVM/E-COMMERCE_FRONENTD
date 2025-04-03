import { useNavigate, useParams } from "react-router-dom"
import ComponenteNuevoPass from "../../layout/componente recuperar contrasenia/ComponenteNuevoPass"
import instance from "../../../axios/instance"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook"
import { toast } from "sonner"

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
            toast.success(resp.data.mensaje);
            setBotonBloquear(false)
            navigate('/')
        } catch (error) {
            setBotonBloquear(false)
            return toast.error(error.response.data.mensaje);
        }
    }
    return (
        <div>
            <ComponenteNuevoPass handleCambiarContrasenia={handleNuevaContrasenia}/>
        </div>
    )
}

export default RecuperarContrasenia