import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';

const ControlUsuario = ( ) => {

  const {usuarioInfo, deslogin, tokenUser} = UserHook()
  const {resetCarritoYFavoritos} = ProductosHook()

  const navigate = useNavigate()

  const miCuenta = () => {
    navigate('/cuenta-usuario'); 
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
            title = {usuarioInfo.nombre}
          >
            <Dropdown.Item eventKey="1" onClick={miCuenta}>Mi cuenta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={()=> deslogin(resetCarritoYFavoritos, navigate, tokenUser)}>Salir</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div className='mx-1 '>
        <img src={usuarioInfo.imagen} className="imagenUsuarioHeader img-thumbnail rounded-circle"/>
      </div>
    </div>
  )
}

export default ControlUsuario