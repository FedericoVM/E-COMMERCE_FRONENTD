
import { Button,Form} from 'react-bootstrap'
import "./cuentaUsuario.css"
import { useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode"
import instanceFormData from '../../../axios/instanceFormData'

const EditarUsuario = ({datosUsuario,setDatosUsuario, token,setToken }) => {


    const use_navigate = useNavigate()

    const regresar = ()=>{
        use_navigate('/cuenta-usuario')
    }

    const editarUsuario = async (e) => {

        e.preventDefault()

        const config = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }



        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let edad = e.target.edad.value;
        let email = e.target.email.value;
        let avatar = e.target.avatar.files[0];


        const formData = new FormData()

        formData.append('nombre', nombre);
        formData.append('apellido', apellido);
        formData.append('edad', edad);
        formData.append('email', email);
        formData.append('avatar', avatar);


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
        <div className='miCuenta'>
            <h2>Mi Cuenta</h2>
            <div className='formulario'>
                <Form onSubmit={editarUsuario}>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name='nombre' type="text" defaultValue={datosUsuario && datosUsuario.nombre} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name='apellido' defaultValue={datosUsuario && datosUsuario.apellido} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" name='edad' defaultValue={datosUsuario && datosUsuario.edad} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name='email' defaultValue={datosUsuario && datosUsuario.email} />
                    </Form.Group>
                    <Form.Group className='grupo' controlId="formBasicEmail">
                        <Form.Label>Foto de perfil</Form.Label>
                        <Form.Control
                            type="file"
                            name="avatar"
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit" onClick={regresar} > 
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditarUsuario