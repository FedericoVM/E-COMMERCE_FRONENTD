import React, { useState } from 'react'
import ControlAdmin from '../controlAdmin/ControlAdmin'
import ControlUsuario from '../controlUsuario/ControlUsuario'



const ContenedorLogin = ({datosUsuario,setToken,setEnLinea,setDatosUsuario,setRol}) => {

  return (
    
    <div className='d-flex'> 
    {
    datosUsuario.role === "admin" ? <ControlAdmin usuario = {datosUsuario} setToken={setToken} setEnLinea={ setEnLinea} setDatosUsuario={setDatosUsuario} setRol = {setRol} /> : <ControlUsuario  usuario = {datosUsuario} setToken={setToken} setEnLinea={ setEnLinea} setDatosUsuario={setDatosUsuario} setRol = {setRol}/>
    }
    </div>
  )
}

export default ContenedorLogin