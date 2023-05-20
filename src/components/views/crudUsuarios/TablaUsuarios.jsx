import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";

const TablaUsuarios = ({ usuarios }) => {
  return (
    <div className="d-flex w-100">
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Activo</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {usuarios.map((usuario, index) =>(<tr key={index}>
        <td className="col-2 text-center td-favoritos">{usuario.nombre}</td>
        <td className="col-4 text-center td-favoritos">{usuario.email}</td>
        <td className="col-3 text-center td-favoritos">{usuario.role}</td>
        <td className="col-2 text-center td-favoritos">{usuario.active ? "Activo":"Inactivo"}</td>
        <td className="col-1 text-center td-favoritos"><Button variant="danger">X</Button></td>
      </tr>))}
          </tbody>
        </Table>
        </div>
  )
}

export default TablaUsuarios