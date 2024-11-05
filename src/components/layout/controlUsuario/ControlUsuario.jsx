import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import "./controlUsuario.css"
import { NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const ControlUsuario = ( ) => {

  const {usuarioInfo, deslogin, tokenUser} = UserHook()
  const {resetCarritoYFavoritos} = ProductosHook()

  const navigate = useNavigate()

  const miCuenta = () => {
    navigate('/cuenta-usuario'); 
  }

  return (
    <div className='d-flex mx-2 mx-md-0 align-items-center justify-content-start'>
      <div>
          <NavDropdown
            id="dropdown-item-button"
            title = {`Hola ${usuarioInfo.nombre}`}
            className='dropDownButtonControlUsuario text-capitalize'
          >
            <DropdownItem className='control-usuario-nav-items' onClick={miCuenta}>Mi cuenta</DropdownItem>
            <Dropdown.Divider/>
            <DropdownItem className='control-usuario-nav-items' onClick={()=> deslogin(resetCarritoYFavoritos, navigate, tokenUser)}>Salir</DropdownItem>
          </NavDropdown>
      </div>
      <div className='mx-1 '>
        <img src={usuarioInfo.imagen} onClick={miCuenta} className="imagenUsuarioHeader img-thumbnail rounded-circle"/>
      </div>
    </div>
  )
}

export default ControlUsuario