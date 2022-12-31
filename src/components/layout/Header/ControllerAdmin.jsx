import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";

const ControllerAdmin = ({usuarioOn, getUser, setUserLog}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUserLog(null);
    navigate('/')
  }

  const productsTable = () => {
    navigate('/tabla-productos')
  }

  const usuariosTable = () => {
    navigate('/tabla-usuarios')
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
            title="Drop small"
          >
            <Dropdown.Item eventKey="1" onClick={productsTable}>Productos</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={usuariosTable}>Usuarios</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3" onClick={handleLogout}>Salir</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div className='mx-1'>
        <img src={usuarioOn.avatar} className="imagenUsuarioHeader img-thumbnail rounded-circle"/>
      </div>
    </div>
  );
}

export default ControllerAdmin