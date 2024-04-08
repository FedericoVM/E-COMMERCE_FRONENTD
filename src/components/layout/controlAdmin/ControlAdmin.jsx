import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import { AdminHook } from '../../../context/Contexto de Admin/AdminHook';

const ControlAdmin = ( ) => {
  const navigate = useNavigate();
  const {usuarioInfo, deslogin, tokenUser} = UserHook()
  const {resetCarritoYFavoritos} = ProductosHook()
  const {setUsuariosAdmin} = AdminHook()

  const miCuenta = () => {
    navigate('/cuenta-usuario');
  }

  const adminProductos = () => {
    navigate('/admin-productos')
  }

  const adminUsuarios = () => {
    navigate('/admin-usuarios')
  }


  return (
    <div className='d-flex align-items-center'>
      <div>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="secondary"
            title={`Hola ${usuarioInfo.nombre}`}
          >
            <Dropdown.Item eventKey="1" onClick={miCuenta}>Mi cuenta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={adminProductos}>Productos</Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={adminUsuarios}>Usuarios</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" onClick={() => deslogin(resetCarritoYFavoritos, navigate, tokenUser, setUsuariosAdmin)}>Salir</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div className='mx-1'>
        <img src={usuarioInfo.imagen} className="imagenUsuarioHeader img-thumbnail rounded-circle" />
      </div>
    </div>
  );
}

export default ControlAdmin