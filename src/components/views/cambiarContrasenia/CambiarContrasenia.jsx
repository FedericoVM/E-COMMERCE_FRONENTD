import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import instance from '../../../axios/instance'
import { useNavigate } from 'react-router-dom'
import ComponenteNuevoPass from '../../layout/componente recuperar contrasenia/ComponenteNuevoPass'
import { toast } from 'sonner'

const CambiarContrasenia = () => {

    const {tokenUser, setBotonBloquear} = UserHook()

    const use_navigate = useNavigate()

    const handleCambiarContrasenia = async(e) =>{

        setBotonBloquear(true)

        let contrasenia = e.password        

        let nuevaContrasenia = {
            password : contrasenia
        }

        const config = {
            headers: {
                "authorization": `Bearer ${tokenUser}`
            }
        }

        try {
            const resp = await instance.put('/usuario', nuevaContrasenia,config)
            setBotonBloquear(false)
            toast.success("Cambios guardados con exito")
           return use_navigate(`/cuenta-usuario`)
        } catch (error) {
            setBotonBloquear(false)
            return toast.error(error.response.data.msj);
        }
    }

    return (
        <div className='contenedor'>
            <ComponenteNuevoPass handleCambiarContrasenia={handleCambiarContrasenia}/>
        </div>
    )
}

export default CambiarContrasenia