import ControlAdmin from '../controlAdmin/ControlAdmin'
import ControlUsuario from '../controlUsuario/ControlUsuario'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'

const ContenedorLogin = ( ) => {

  const {usuarioRol} = UserHook()

  return (
    <div className='d-flex'>
    {
    usuarioRol === "admin" ? <ControlAdmin/> : <ControlUsuario/>
    }
    </div>
  )
}

export default ContenedorLogin