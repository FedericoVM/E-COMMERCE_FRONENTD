import React from 'react'
import { regexPassword } from '../../../RegExp/relugarExp'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import instance from '../../../axios/instance'
import { useNavigate } from 'react-router-dom'
import ComponenteNuevoPass from '../../layout/componente recuperar contrasenia/ComponenteNuevoPass'

const CambiarContrasenia = () => {

    const {tokenUser, setBotonBloquear} = UserHook()

    const use_navigate = useNavigate()

    const handleCambiarContrasenia = async(e) =>{
        e.preventDefault()

        setBotonBloquear(true)

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

        const config = {
            headers: {
                "authorization": `Bearer ${tokenUser}`
            }
        }

        try {
            const resp = await instance.put('/usuario', nuevaContrasenia,config)
            console.log(resp.data.msj);
            setBotonBloquear(false)
           return use_navigate(`/cuenta-usuario`)
        } catch (error) {
            setBotonBloquear(false)
            return console.log(error.response.data.msj);
        }
    }

    return (
        <div className='contenedor'>
            <ComponenteNuevoPass handleCambiarContrasenia={handleCambiarContrasenia}/>
        </div>
    )
}

export default CambiarContrasenia