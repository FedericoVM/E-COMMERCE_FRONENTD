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
          toast.error(error.response.data.mensaje);
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
            mostrarUsuariosAdmin(tokenUser)
            toast("Se cambio el rol")
        } catch (error) {
            return toast.error('Hubo problemas con el servidor.')
        }
    }

    const eliminarUsuario = async (id_usuario, tokenUser, mostrarUsuariosAdmin) => {
      const config = {
          headers: {
              authorization: `Bearer ${tokenUser}`,
          },
      };

      try {
          const resp = await instance.delete(`/auth/${id_usuario}`, config);
          toast.success(resp.data.mensaje);
          mostrarUsuariosAdmin(tokenUser)
      } catch (error) {
          toast.error(error.response.data);
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