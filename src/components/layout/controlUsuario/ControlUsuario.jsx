import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const ControlUsuario = ({usuario}) => {

  const miCuenta = () => {
    console.log(usuario);
  }

  const cerrarSesion = () => {
    
    try {
      localStorage.clear();
      return console.log("Su sesion fue finalizada")
    } catch (error) {
      console.log(error);
    }
    
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
            title = {`Hola ${usuario.nombre}`}
          >
            <Dropdown.Item eventKey="1" onClick={miCuenta}>Mi cuenta</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={cerrarSesion}>Salir</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
      <div className='mx-1'>
        <img src={usuario.avatar} className="imagenUsuarioHeader img-thumbnail rounded-circle"/>
      </div>
    </div>
  )
}

export default ControlUsuario