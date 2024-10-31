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
            return console.log(error.message);
        }
    }

    return (
        <div className='d-flex justify-content-center mb-2'>
            {usuarioInfo ? <FormikComponenteUsuario onSubmit={onSubmit}/> : <h2>Cargando</h2>}
        </div>
    )
}

export default EditarUsuario