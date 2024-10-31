import { useState, useEffect } from "react";
import Paginacion from "../paginacion/Paginacion";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { AdminHook } from "../../../context/Contexto de Admin/AdminHook";

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
    <div className="container">
      <div className="w-100">
        {usuariosAdmin ?
        <Paginacion
          setArrayBuscar={setArrayBuscar}
          lista={usuariosAdmin}
          card="usuarios"
          arrayBuscar={arrayBuscar}
          mostrarBarra={mostrarBarra}
        />: "cargando..."}
      </div>
      <div className="col-12 d-flex d-block d-md-none container justify-content-center align-items-center"></div>
    </div>
  );
};

export default AdminUsuario;
