import { useState, useReducer} from "react";
import { UseUser } from "./UseUser";
import instance from "../../axios/instance";
import UserReducer from "./UserReducer";
import jwtDecode from "jwt-decode";
import {toast} from "sonner"
import {
  OBTENER_USER_CARRITO,
  OBTENER_USER_FAVORITOS,
  OBTENER_USER_INFO,
  USUARIO_ROL,
  RESET_USUARIO,
  OBTENER_USUARIO_HISTORIAL_COMPRAS
} from "./typesUser";

const UserProvider = ({ children }) => {
  const [tokenUser, setTokenUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [fullScreenRegistro, setFullScreenRegistro] = useState(true)
  const [fullScreenLogin, setFullScreenLogin] = useState(true)
  const [botonBloquear, setBotonBloquear] = useState(false)
  const [showModalCarrito, setShowModalCarrito] = useState(false)
  const [brilloModalCarrito, setBrilloModalCarrito] = useState(false)

  const handleCloseModalCarrito = (state) =>{
    if(!tokenUser){
      return toast.warning('Tiene que iniciar sesion')
    }
    setShowModalCarrito(state)
  }

  const handleShowModal = (breakPoint, setScreen, setShow) => {
    setScreen(breakPoint);
    setShow(true)
  }

  const initialStateUser = {
    usuarioInfo: null,
    usuarioCarrito: null,
    usuarioFavoritos: null,
    usuarioEnLinea: false,
    usuarioRol: [],
    usuarioHistorialCompras: null
  };

  const [state, dispatch] = useReducer(UserReducer, initialStateUser);

  const obtenerInfoUsuario = async (token) => {
    try {
      const infoUsuario = await jwtDecode(token);
      dispatch({ type: OBTENER_USER_INFO, payload: infoUsuario });
      dispatch({ type: USUARIO_ROL, payload: infoUsuario.role });
      if (infoUsuario.expiracion > Date.now()){
      if(!state.usuarioInfo) {
        toast(`Hola ${infoUsuario.nombre}`)
      }
    }
    } catch (error) {
      toast.error('Intente nuevamente.');
    }
  };

  const obtenerCarritoUsuario = async (token) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const carrito = await instance.get("/carrito", config);
      dispatch({ type: OBTENER_USER_CARRITO, payload: carrito.data });
    } catch (error) {
      return toast.error(error.response.data);
    }
  };

  const actualizarCarrito = async (e, id, cantidad, producto) => {
    let operacion = e.target.name;
    let cant = { cantidad: cantidad };

    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    if (operacion === "sumar") {
      if (cant.cantidad === producto.stock) {
        return toast.warning(
          "No puede agregar mas cantidad. LLego al limite de stock del producto"
        );
      } else {
        cant = { cantidad: (cantidad += 1) };
      }
    } else {
      if (cantidad === 1) {
        return toast.warning("La cantidad minima es 1");
      } else {
        cant = { cantidad: (cantidad -= 1) };
      }
    }

    try {
      let resultado = await instance.put(`/carrito/${id}`, cant, config);
      obtenerCarritoUsuario(tokenUser);
    } catch (error) {
      if(error.response.request.status === 400){
      toast.error(error.response.data.mensaje);
      return obtenerCarritoUsuario(tokenUser)
      }
      toast.error(error.response.data.mensaje)
    }
  };

  const eliminarProductoDelCarrito = async (id) => {
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    try {
      let resultado = await instance.delete(`/carrito/${id}`, config);
      toast.success(resultado.data.mensaje);
      obtenerCarritoUsuario(tokenUser);
    } catch (error) {
      toast.error(error.response.data.mensaje);
    }
  };

  const obtenerUsuarioFavoritos = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const favoritos = await instance.get("/favoritos", config);
      dispatch({ type: OBTENER_USER_FAVORITOS, payload: favoritos.data });
    } catch (error) {
      return toast.error(error.favoritos.data);
    }
  };

  const obtenerHistorialDeCompras = async(token, email) =>{
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const historial = await instance.get(`/mercadoPago/payment-history/${email}`,config)
      dispatch({ type: OBTENER_USUARIO_HISTORIAL_COMPRAS, payload: historial.data})
    } catch (error) {
      dispatch({ type: OBTENER_USUARIO_HISTORIAL_COMPRAS, payload: error.response.data})
    }
  }

  const deslogin = async (resetCarritoYFavoritos, navigate, setUsuariosAdmin) => {

    localStorage.clear();
    dispatch({type: RESET_USUARIO, payload: initialStateUser})
    resetCarritoYFavoritos()
    setTokenUser(null)
    if (setUsuariosAdmin) {
      setUsuariosAdmin(null)
    }
    navigate('/')
    return toast("Sesion finalizada")
  }

  const fechaDeCompra = (data) =>{
    const fecha = new Date(Number(data))

    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2,'0');

    return `${anio}-${mes}-${dia}`;
  }

  return (
    <UseUser.Provider
      value={{
        usuarioInfo: state.usuarioInfo,
        usuarioEnLinea: state.usuarioEnLinea,
        usuarioCarrito: state.usuarioCarrito,
        usuarioFavoritos: state.usuarioFavoritos,
        usuarioRol: state.usuarioRol,
        usuarioHistorialCompras: state.usuarioHistorialCompras,
        initialStateUser,
        obtenerUsuarioFavoritos,
        obtenerInfoUsuario,
        obtenerCarritoUsuario,
        actualizarCarrito,
        eliminarProductoDelCarrito,
        obtenerHistorialDeCompras,
        dispatch,
        tokenUser,
        setTokenUser,
        showLogin,
        setShowLogin,
        showRegistro,
        setShowRegistro,
        fullScreenRegistro,
        setFullScreenRegistro,
        fullScreenLogin,
        setFullScreenLogin,
        handleShowModal,
        deslogin,
        botonBloquear,
        setBotonBloquear,
        showModalCarrito,
        setShowModalCarrito,
        handleCloseModalCarrito,
        brilloModalCarrito,
        setBrilloModalCarrito,
        fechaDeCompra
      }}
    >
      {children}
    </UseUser.Provider>
  );
};

export default UserProvider;