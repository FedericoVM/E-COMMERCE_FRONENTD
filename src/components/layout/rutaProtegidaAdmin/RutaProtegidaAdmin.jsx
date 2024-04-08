import { Navigate, Outlet} from 'react-router-dom'

const RutaProtegidaAdmin = ({ autenticado, children }) => {
  
  if (autenticado) {
    return children ? children : <Outlet />
  } else {
    return <Navigate to='/'/>
  }
}

export default RutaProtegidaAdmin