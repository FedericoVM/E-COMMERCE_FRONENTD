import { Outlet, useNavigate } from 'react-router-dom'

const RutaProtegidaAdmin = ({ autenticado, children }) => {
  console.log(autenticado);
  const use_navigate = useNavigate()

  if (autenticado) {
    return children ? children : <Outlet />
  } 
  
  else {
    use_navigate("/")

  }

  // if (autenticado == "usuario" || autenticado === "admin") {
  //   return children ? children : <Outlet />
  // } else {
  //   use_navigate("/")

  // }






}

export default RutaProtegidaAdmin