import "./cuentaUsuario.css"
import { useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode"
import instanceFormData from '../../../axios/instanceFormData'
import FormilComponenteUsuario from '../Formik Componente/FormikComponenteUsuario'

const EditarUsuario = ({datosUsuario,setDatosUsuario, token,setToken }) => {

    const use_navigate = useNavigate()

    const onSubmit = async (values) => {

        const config = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }

        const formData = new FormData()

        formData.append('nombre', values.nombre);
        formData.append('apellido', values.apellido);
        formData.append('edad', values.edad);
        formData.append('email', values.email);
        formData.append('avatar', values.avatar);

        try {
            const resp = await instanceFormData.put(`/usuario/${datosUsuario.id_usuario}`, formData,config)
            const nuevoToken = resp.data.token
            setToken(nuevoToken)
            localStorage.setItem("tokenUsuario", nuevoToken)
            const u = jwt_decode(nuevoToken)
            setDatosUsuario(u)
           return use_navigate(`/cuenta-usuario`)
        } catch (error) {
            return console.log(error.message);
        }
    }

    return (
        <div className='d-flex justify-content-center mb-2'>
            {datosUsuario ? <FormilComponenteUsuario onSubmit={onSubmit} datosUsuario={datosUsuario}/> : <h2>Cargando</h2>}
        </div>
    )
}

export default EditarUsuario