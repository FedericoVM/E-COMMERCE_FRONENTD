import { useState } from "react"
import { UseAdmin } from "./UseAdmin";
import instance from "../../axios/instance";
import instanceFormData from "../../axios/instanceFormData";
import { toast } from "sonner"

const AdminProvider = ({children}) => {

    const [usuariosAdmin, setUsuariosAdmin] = useState(null);
    
    const mostrarUsuariosAdmin = async (token_usuario) => {
    
        const config = {
          headers: {
            Authorization: `Bearer ${token_usuario}`,
          },
        };
        
        try {
          const listaUsuarios = await instance.get("/auth", config);
          let filtrarUsuarios = listaUsuarios.data
          setUsuariosAdmin(filtrarUsuarios);
        } catch (error) {
          console.log(error.response.data);
        }
      };

      const cambiarRolUser = async (rol, usuarioId, tokenUser, mostrarUsuariosAdmin) => {

        let role;

        if (rol === "usuario") {
            role = "admin"
        } else {
            role = "usuario"
        }

        const config = {
            headers: {
                "authorization": `Bearer ${tokenUser}`
            }
        }

        const formData = new FormData();

        formData.append('role', role);

        try {
            const resp = await instanceFormData.put(`/auth/${usuarioId}`, formData, config);
            console.log("Se cambio el rol ");
            mostrarUsuariosAdmin(tokenUser)
            toast("hecho")
        } catch (error) {
            return console.log(error);
        }
    }

    const eliminarUsuario = async (id_usuario, tokenUser, mostrarUsuariosAdmin) => {
        return console.log("text");
      const config = {
          headers: {
              authorization: `Bearer ${tokenUser}`,
          },
      };

      try {
          const resp = await instance.delete(`/auth/${id_usuario}`, config);
          console.log(resp.data.mensaje);
          mostrarUsuariosAdmin(tokenUser)
      } catch (error) {
          console.log(error.response.data);
      }
  };

      return (
        <UseAdmin.Provider value={{
            usuariosAdmin,
            setUsuariosAdmin,
            mostrarUsuariosAdmin,
            cambiarRolUser,
            eliminarUsuario
        }}>
            {children}
        </UseAdmin.Provider>
      )
}

export default AdminProvider