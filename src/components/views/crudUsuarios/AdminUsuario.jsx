import { useState, useEffect } from "react";
import Paginacion from "../paginacion/Paginacion";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { AdminHook } from "../../../context/Contexto de Admin/AdminHook";
import "./adminUsuario.css"

const AdminUsuario = ( ) => {

  const {tokenUser} = UserHook()
  const {usuariosAdmin, mostrarUsuariosAdmin} = AdminHook()

  let mostrarBarra = true
  const [arrayBuscar, setArrayBuscar] = useState(null);

  useEffect(() => {
    if (tokenUser != null){
    mostrarUsuariosAdmin(tokenUser)
  }
  }, [tokenUser]);

  return (
    <div className="" style={{minHeight: "61vh"}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {usuariosAdmin ?
        <Paginacion
          setArrayBuscar={setArrayBuscar}
          lista={usuariosAdmin}
          card="usuarios"
          arrayBuscar={arrayBuscar}
          mostrarBarra={mostrarBarra}
        />: "cargando..."}
      </div>
    </div>
  );
};

export default AdminUsuario;
