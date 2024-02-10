import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const RutaProtegidaAdmin = ({ autenticado, children }) => {

  const use_navigate = useNavigate()
  const localUser = localStorage.getItem("tokenUsuario")
  
  if (autenticado || localUser) {
    return children ? children : <Outlet />
  }

  useEffect(() => {
      use_navigate("/")
  }, [])
}

export default RutaProtegidaAdmin