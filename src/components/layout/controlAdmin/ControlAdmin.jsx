import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";

const ControlAdmin = ({ usuario, setToken, setEnLinea, setDatosUsuario, setRol }) => {
  const navigate = useNavigate();

  const miCuenta = () => {
    navigate('/cuenta-usuario');
  }

  const cerrarSesion = () => {

    try {
      localStorage.clear();
      setToken(null)
      setEnLinea(false)
      setDatosUsuario(null)
      setRol([])
      navigate('/')
      return console.log("Su sesion fue finalizada")
    } catch (error) {
      console.log(error);
    }

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
            title={`Hola ${usuario.nombre}`}
          >
            <Dropdown.Item eventKey="1" onClick={miCuenta}>Mi cuenta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={adminProductos}>Productos</Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={adminUsuarios}>Usuarios</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" onClick={cerrarSesion}>Salir</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div className='mx-1'>
        <img src={usuario.imagen} className="imagenUsuarioHeader img-thumbnail rounded-circle" />
      </div>
    </div>
  );
}

export default ControlAdmin