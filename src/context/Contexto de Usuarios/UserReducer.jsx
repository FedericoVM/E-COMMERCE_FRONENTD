import {
  OBTENER_USER_CARRITO,
  OBTENER_USER_FAVORITOS,
  OBTENER_USER_INFO,
  USUARIO_EN_LINEA,
  USUARIO_ROL,
  RESET_USUARIO
} from "./typesUser";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case OBTENER_USER_INFO:
      return {
        ...state,
        usuarioInfo: payload,
      };
    case OBTENER_USER_CARRITO:
      return {
        ...state,
        usuarioCarrito: payload,
      };
    case OBTENER_USER_FAVORITOS:
      return {
        ...state,
        usuarioFavoritos: payload,
      };
    case USUARIO_EN_LINEA:
      return {
        ...state,
        usuarioEnLinea: payload,
      };
    case USUARIO_ROL:
      return {
        ...state,
        usuarioRol: payload,
      };
      case RESET_USUARIO:
        return payload;
    default:
      return state;
  }
 
};
