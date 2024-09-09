import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import { AdminHook } from '../../../context/Contexto de Admin/AdminHook';
import "./controlAdmin.css"
import { NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const ControlAdmin = ( ) => {
  const navigate = useNavigate();
  const {usuarioInfo, deslogin, tokenUser} = UserHook()
  const {resetCarritoYFavoritos} = ProductosHook()
  const {setUsuariosAdmin} = AdminHook()

  const redirigirA = (destino) => {
    return navigate(`/${destino}`)
  }

  return (
    <div className='d-flex align-items-center'>
      <div>
          <NavDropdown
            id="dropdown-item-button"
            title={`Hola ${usuarioInfo.nombre}`}
            className='dropDownButtonControlAdmin text-capitalize px-1 px-md-0'
          >
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('cuenta-usuario')}}>Mi cuenta</DropdownItem>
            <Dropdown.Divider/>
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('admin-productos')}}>Productos</DropdownItem>
            <DropdownItem className='control-admin-nav-items' onClick={() => {redirigirA('admin-usuarios')}}>Usuarios</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem className='control-admin-nav-items' onClick={() => deslogin(resetCarritoYFavoritos, navigate, tokenUser, setUsuariosAdmin)}>Salir</DropdownItem>
          </NavDropdown>
      </div>
      <div className='mx-1'>
        <img src={usuarioInfo.imagen} onClick={() => {redirigirA('cuenta-usuario')}} className="imagenUsuarioHeader img-thumbnail rounded-circle" />
      </div>
    </div>
  );
}

export default ControlAdmin