import Paginacion from "../paginacion/Paginacion";
import FavoritosVacio from "./FavoritosVacio";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const Favoritos = ( ) => {

  const {usuarioFavoritos} = UserHook()

  return (
    <div className="d-flex justify-content-center my-3">
      {usuarioFavoritos.length > 0 ? <Paginacion lista={usuarioFavoritos} card="favoritos"/> : <FavoritosVacio/>}
    </div>
  );
};

export default Favoritos;