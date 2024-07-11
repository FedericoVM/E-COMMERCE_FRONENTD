import Paginacion from "../paginacion/Paginacion";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import FavoritosVacio from "./FavoritosVacio";

const Favoritos = ( ) => {

  const {productosFavoritosAMostrar} = ProductosHook()

  return (
    <div className="d-flex justify-content-center my-3">
      {productosFavoritosAMostrar.length > 0 ? <Paginacion lista={productosFavoritosAMostrar} card="favoritos"/> : <FavoritosVacio/>}
    </div>
  );
};

export default Favoritos;