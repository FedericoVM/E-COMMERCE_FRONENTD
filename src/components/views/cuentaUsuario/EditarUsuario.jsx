import "./cuentaUsuario.css"
import { useNavigate} from 'react-router-dom'
import instanceFormData from '../../../axios/instanceFormData'
import FormikComponenteUsuario from "../Formik Componente/FormikComponenteUsuario"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook"
import {toast} from "sonner"

const EditarUsuario = ( ) => {

    const {usuarioInfo, tokenUser, setTokenUser, obtenerInfoUsuario, setBotonBloquear} = UserHook()
    const use_navigate = useNavigate()

    const onSubmit = async (values) => {
       
        setBotonBloquear(true)

        const config = {
            headers: {
                "authorization": `Bearer ${tokenUser}`
            }
        }

        const formData = new FormData()

        formData.append('nombre', values.nombre);
        formData.append('apellido', values.apellido);
        formData.append('edad', values.edad);
        formData.append('email', values.email);
        formData.append('avatar', values.avatar);
        
        try {
            const resp = await instanceFormData.put(`/usuario/${usuarioInfo.id_usuario}`, formData,config)
            const nuevoToken = resp.data.token
            setTokenUser(nuevoToken)
            localStorage.setItem("tokenUsuario", nuevoToken)
            obtenerInfoUsuario(nuevoToken)
            setBotonBloquear(false)
            toast.success("Sus datos fueron actualizados")
           return use_navigate(`/cuenta-usuario`)
        } catch (error) {
            setBotonBloquear(false)
            return toast.error(error.response.data.mensage);
        }
    }

    return (
        <div className='d-flex align-self-center border-start rounded contenedor-form-editar-usuario border-end justify-content-center mt-3 col-12 col-sm-9 col-md-7 col-lg-6'>
            {usuarioInfo ? <FormikComponenteUsuario onSubmit={onSubmit}/> : <h2>Cargando</h2>}
        </div>
    )
}

export default EditarUsuario