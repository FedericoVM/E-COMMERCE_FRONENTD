import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TablaUsuarios from "./TablaUsuarios";
import instance from "../../../axios/instance";
import Paginacion from "../paginacion/Paginacion";

const AdminUsuario = ({datosUsuario,setDatosUsuario, token,setToken }) => {
  const [arrayBuscar, setArrayBuscar] = useState([]);
  // const [postsPerPage] = useState(10);
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

  
  const buscarUsuario = (e) => {
    e.preventDefault();

    let buscar = e.target.buscar.value;

    let usuarioEncontrado = usuarios.filter((usuario) => {
      return (
        usuario.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
        usuario.apellido.toLowerCase().includes(buscar.toLowerCase()) ||
        usuario.email.toLowerCase().includes(buscar.toLowerCase())
      );
    });
    if (usuarioEncontrado.length <= 0) {
      return alert("Usuario no encontrado");
    }
    setArrayBuscar(usuarioEncontrado);
  };



  useEffect(() => {
    mostrarUsuarios(token);
  }, [token]);

  return (
    <div className="container">
      <div className="d-flex container justify-content-center mt-2">
        <form
          onSubmit={buscarUsuario}
          className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center"
        >
          <input
            name="buscar"
            type="text"
            placeholder="Ingresar nombre,apellido o email"
            className="d-flex align-self-center rounded border w-75"
          />
          <div className="d-flex justify-content-evenly mt-2 container">
            <Button type="submit">Buscar</Button>
            <Button
              variant="success"
              onClick={() => {
                setArrayBuscar([]);
              }}
            >
              Refresh
            </Button>
          </div>
        </form>
      </div>
      <div className="w-100">
        {/* <TablaUsuarios
          token={token}
          usuarios={usuarios}
          arrayBuscar={arrayBuscar}
          mostrarUsuarios = {()=>mostrarUsuarios(token)}
        /> */}
        <Paginacion lista={usuarios} card = "usuarios" />
      </div>
      <div className="col-12 d-flex d-block d-md-none container justify-content-center align-items-center"></div>
    </div>
  );
};

export default AdminUsuario;
