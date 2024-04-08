import { useEffect } from "react";
import Paginacion from "../paginacion/Paginacion";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";

const Favoritos = ( ) => {

  const {usuarioFavoritos} = UserHook()
  const {productosHome, filtrarFavoritosAMostrarProducto, productosFavoritosAMostrar} = ProductosHook()

  useEffect(() => {
    if (usuarioFavoritos){
    filtrarFavoritosAMostrarProducto(productosHome, usuarioFavoritos)
  }
  }, [usuarioFavoritos])

  return (
    <div className="">
      {productosFavoritosAMostrar ? <Paginacion lista={productosFavoritosAMostrar} card="favoritos"/> : <p>NO hay productos agregados al favorito</p>}
    </div>
  );
};

export default Favoritos;