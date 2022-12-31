import React from 'react'
import ControllerAdmin from './ControllerAdmin'
import ControllersUser from './ControllersUser'

const ContenedorLogin = ({usuarioOn , getUser, setUserLog}) => {
  return (
    <div className='d-flex'>{usuarioOn.role === "admin" ? <ControllerAdmin usuarioOn={usuarioOn} getUser={getUser} setUserLog={setUserLog}/>:<ControllersUser usuarioOn={usuarioOn} getUser={getUser} setUserLog={setUserLog}/>}
    </div>
  )
}

export default ContenedorLogin