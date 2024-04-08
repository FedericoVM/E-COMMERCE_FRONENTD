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

        e.preventDefault()

        let contrasenia = e.target.CambiarContrasenia.value

        if(contrasenia.length > 30){
            setBotonBloquear(false)
            return console.log('Exedio el maximo de caracteres');
        }

        if(!regexPassword.test(contrasenia)){
            setBotonBloquear(false)
            return console.log("la contrasenia debe contener un minimo de 5 caracteres con caracteres especiales y mayusculas")
        }

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