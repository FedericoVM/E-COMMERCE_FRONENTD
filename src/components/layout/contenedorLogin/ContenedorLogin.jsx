import React, { useState } from 'react'
import ControlAdmin from '../controlAdmin/ControlAdmin'
import ControlUsuario from '../controlUsuario/ControlUsuario'



const ContenedorLogin = ({datosUsuario,setToken}) => {

  return (
    
    <div className='d-flex'> 
    {
    datosUsuario.role === "admin" ? <ControlAdmin usuario = {datosUsuario} setToken={setToken}  /> : <ControlUsuario  usuario = {datosUsuario} setToken={setToken} />
    }
    </div>
  )
}

export default ContenedorLogin