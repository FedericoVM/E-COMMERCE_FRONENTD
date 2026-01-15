import {
  FILTRAR_FAVORITOS_A_MOSTRAR,
  RESET_CARRITO_Y_FAVORITOS,
} from "./typesProductos";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case FILTRAR_FAVORITOS_A_MOSTRAR:
      return {
        ...state,
        productosFavoritosAMostrar: payload,
      };
    case RESET_CARRITO_Y_FAVORITOS:
      return payload;
    default:
      return state;
  }
};
