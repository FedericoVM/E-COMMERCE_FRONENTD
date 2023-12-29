import { useState, useEffect } from "react";
import instance from "../../../axios/instance";
import Paginacion from "../paginacion/Paginacion";

const AdminUsuario = ({ token }) => {
  let mostrarBarra = true
  const [arrayBuscar, setArrayBuscar] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const mostrarUsuarios = async (token_usuario) => {
    
    const config = {
      headers: {
        Authorization: `Bearer ${token_usuario}`,
      },
    };

    try {
      const listaUsuarios = await instance.get("/auth", config);
      setUsuarios(listaUsuarios.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  useEffect(() => {
    mostrarUsuarios(token);
  }, [token]);

  return (
    <div className="container">
      <div className="w-100">
        <Paginacion
          setArrayBuscar={setArrayBuscar}
          lista={usuarios}
          card="usuarios"
          token={token}
          arrayBuscar={arrayBuscar}
          mostrarUsuarios={() => mostrarUsuarios(token)}
          mostrarBarra={mostrarBarra}
        />
      </div>
      <div className="col-12 d-flex d-block d-md-none container justify-content-center align-items-center"></div>
    </div>
  );
};

export default AdminUsuario;
