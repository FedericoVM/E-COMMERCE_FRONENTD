import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { AdminHook } from '../../../context/Contexto de Admin/AdminHook';
import "./controlAdmin.css"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { NavDropdown } from 'react-bootstrap';

const ControlAdmin = ( ) => {
  const navigate = useNavigate();
  const {usuarioInfo, deslogin} = UserHook()
  const {setUsuariosAdmin} = AdminHook()

  const redirigirA = (destino) => {
    return navigate(`/${destino}`)
  }

  return (
    <div className='d-flex align-items-center'>
      <div>
          <NavDropdown
          className='dropDownButtonControlAdmin text-capitalize'
            id='dropdown-item-button'
            title={`Hola ${usuarioInfo.nombre}`}
          >
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('cuenta-usuario')}}>Mi cuenta</DropdownItem>
            <Dropdown.Divider/>
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('admin-productos')}}>Productos</DropdownItem>
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('admin-usuarios')}}>Usuarios</DropdownItem>
            <Dropdown.Divider/>
            <DropdownItem className='control-admin-nav-items' onClick={() => deslogin(navigate, setUsuariosAdmin)}>Salir</DropdownItem>
          </NavDropdown>
      </div>
      <div className='mx-1'>
        <img src={usuarioInfo.imagen} onClick={() => {redirigirA('cuenta-usuario')}} className="imagenUsuarioHeader img-thumbnail rounded-circle" />
      </div>
    </div>
  );
}

export default ControlAdmin