import { Navigate, Outlet} from 'react-router-dom'
import { toast } from 'sonner'

const RutaProtegidaAdmin = ({ autenticado, children }) => {
  
  if (autenticado) {
    return children ? children : <Outlet />
  } else {
    toast.warning('Tiene que iniciar sesion o no tiene el rol para esta ventana')
    return <Navigate to='/'/>
  }
}

export default RutaProtegidaAdmin