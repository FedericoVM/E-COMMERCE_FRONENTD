import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import instance from "../../../axios/instance";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instanceFormData from "../../../axios/instanceFormData";

const TablaUsuarios = ({ token,usuarios,arrayBuscar,mostrarUsuarios }) => {

  let role;

  const borrarUsuario = async (id_usuario) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const resp = await instance.delete(`/auth/${id_usuario}`, config);
      console.log(resp.data.mensaje);
      mostrarUsuarios(token)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const cambiarRol = async (rol, usuarioId) =>{
  
    if(rol === "usuario") {
       role = "admin"
    } else {
     role = "usuario"
    }

    const config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    }




    const formData = new FormData();

    formData.append('role', role);

  


    try {
     
      const resp = await instanceFormData.put(`/auth/${usuarioId}`, formData,config);
      console.log("Se cambio el rol ");
      mostrarUsuarios(token)
    } catch (error) {
      return console.log(error);
    }

  }

 
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
            <th>Admin.</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {arrayBuscar.length == 0
            ? usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td className="col-4 text-center td-favoritos">
                    {usuario._id}
                  </td>
                  <td className="col-2 text-center td-favoritos">
                    {usuario.nombre} {usuario.apellido}
                  </td>
                  <td className="col-4 text-center td-favoritos">
                    {usuario.email}
                  </td>
                  <td className="col-3 text-center td-favoritos">
                    {usuario.role}
                  </td>
                  <td className="col-2 text-center td-favoritos">
                    {usuario.active ? "Activo" : "Inactivo"}
                  </td>

                  <td className="col-1 text-center td-favoritos">
                  <Button onClick={()=> {cambiarRol(usuario.role,usuario._id)} }> {usuario.role === "admin"  ? "Desactivar"  : "Activar" } </Button>
                  </td>
                  
                  <td className="col-1 text-center td-favoritos">
                    <Button
                      onClick={() => {
                        borrarUsuario(usuario._id);
                      }}
                      variant="danger"
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))
            : arrayBuscar.map((usuario, index) => (
                <tr key={index}>
                  <td className="col-4 text-center td-favoritos">
                    {usuario._id}
                  </td>
                  <td className="col-2 text-center td-favoritos">
                    {usuario.nombre} {usuario.apellido}
                  </td>
                  <td className="col-4 text-center td-favoritos">
                    {usuario.email}
                  </td>
                  <td className="col-3 text-center td-favoritos">
                    {usuario.role}
                  </td>
                  <td className="col-2 text-center td-favoritos">
                    {usuario.active ? "Activo" : "Inactivo"}
                  </td>
                  <td className="col-1 text-center td-favoritos">
                  <Button onClick={()=> {cambiarRol(usuario.role,usuario._id)} }> {usuario.role === "admin"  ? "Desactivar"  : "Activar" } </Button>
                  </td>
                  <td className="col-1 text-center td-favoritos">
                    <Button
                      onClick={() => {
                        borrarUsuario(usuario._id);
                      }}
                      variant="danger"
                    >
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
