import React, { useState } from 'react'
import ControlAdmin from '../controlAdmin/ControlAdmin'
import ControlUsuario from '../controlUsuario/ControlUsuario'



const ContenedorLogin = ({datosUsuario}) => {

  return (
    
    <div className='d-flex'> 
    {
    datosUsuario.role === "admin" ? <ControlAdmin usuario = {datosUsuario} /> : <ControlUsuario  usuario = {datosUsuario} />
    }
    </div>
  )
}

export default ContenedorLogin