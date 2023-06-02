import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import instance from "../../../axios/instance";
import { useNavigate } from "react-router-dom";


const TablaUsuarios = ({ usuarios,token,arrayBuscar }) => {

  const use_navigate = useNavigate() 

  const borrarUsuario = async (id_usuario) => {
    const config = {
      headers: {
        "authorization": `Bearer ${token}`
      }
    }
   
  
     try {
        const resp =  await instance.delete(`/auth/${id_usuario}`,config);
         console.log(resp.data.mensaje);
         use_navigate();

      }  catch (error) {
        console.log(error.response.data);
      }
    
  };



  return (
    <div className="d-flex w-100">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre y Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Activo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td className="col-4 text-center td-favoritos">{usuario._id}</td>
              <td className="col-2 text-center td-favoritos">
                {usuario.nombre} {usuario.apellido}
              </td>
              <td className="col-4 text-center td-favoritos">
                {usuario.email}
              </td>
              <td className="col-3 text-center td-favoritos">{usuario.role}</td>
              <td className="col-2 text-center td-favoritos">
                {usuario.active ? "Activo" : "Inactivo"}
              </td>
              <td className="col-1 text-center td-favoritos">
                <Button onClick={()=> {borrarUsuario(usuario._id)}} variant="danger">
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaUsuarios;
