import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const RutaProtegidaAdmin = ({ autenticado, children }) => {

  const use_navigate = useNavigate()

  if (autenticado) {
    return children ? children : <Outlet />
  }

  useEffect(() => {
      use_navigate("/")
  }, [])



}

export default RutaProtegidaAdmin