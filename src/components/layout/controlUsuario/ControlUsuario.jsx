import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import "./controlUsuario.css"
import { NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useEffect, useState } from 'react';

const ControlUsuario = ( ) => {

  const [nombreUsuario, setNombreUsuario] = useState(null)

  const {usuarioInfo, deslogin} = UserHook()

  const seleccionarPrimerNombre = () =>{
    let nombre = usuarioInfo.nombre.split(" ")
    return setNombreUsuario(nombre[0])
  }

  const navigate = useNavigate()

  const miCuenta = () => {
    navigate('/cuenta-usuario'); 
  }

  useEffect(()=>{
    seleccionarPrimerNombre()
  },[nombreUsuario])

  return (
    <div className='d-flex mx-2 mx-md-0 align-items-center col-9 col-md-12 col-lg-9 justify-content-evenly'>
      <div>
          <NavDropdown
            id="dropdown-item-button"
            title = {`Hola ${nombreUsuario}`}
            className='dropDownButtonControlUsuario text-capitalize'
          >
            <DropdownItem className='control-usuario-nav-items' onClick={miCuenta}>Mi cuenta</DropdownItem>
            <Dropdown.Divider/>
            <DropdownItem className='control-usuario-nav-items' onClick={()=> deslogin(navigate)}>Salir</DropdownItem>
          </NavDropdown>
      </div>
      <div className=''>
        <img src={usuarioInfo.imagen} onClick={miCuenta} className="imagenUsuarioHeader img-thumbnail rounded-circle"/>
      </div>
    </div>
  )
}

export default ControlUsuario