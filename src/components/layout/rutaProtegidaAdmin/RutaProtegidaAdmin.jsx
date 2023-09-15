import { Outlet, useNavigate } from 'react-router-dom'

const RutaProtegidaAdmin = ({ autenticado, children }) => {
  
  const use_navigate = useNavigate()

  if (autenticado) {
    return children ? children : <Outlet />
  } 
  
  else {
    use_navigate("/")

  }




}

export default RutaProtegidaAdmin