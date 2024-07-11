import { Button } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import "./contenidoPaginaProducto.css"

const ContenidoPaginaProducto = ({ productoAMostrar }) => {

  const { obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea } =
    UserHook();
  const {agregarAFavoritos, eliminarDeFavoritos, cambiarBotonFavorito, productosFavoritosAMostrar} = ProductosHook();

  const favoritoExistente = cambiarBotonFavorito(usuarioEnLinea, productosFavoritosAMostrar, productoAMostrar._id)

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex flex-column contenedor-imagen-y-descripcion-pagina border-bottom align-items-center my-2 col-12 justify-content-evenly col-lg-10">
        <div className="imagen-pagina-producto col-6 col-md-6 mb-4 mb-md-0 border rounded">
        <img
          src={`${productoAMostrar.imagen}`}
          className="imagen-pagina-producto rounded"
        />
        {favoritoExistente === true ?
        <Button
        variant="primary"
          className="boton-favorito"
          onClick={()=> {
            eliminarDeFavoritos(productoAMostrar._id, tokenUser, obtenerUsuarioFavoritos)
          }}
        >
          <BsSuitHeartFill/>
        </Button>
        :
        <Button
          variant="primary"
          className="boton-favorito"
          onClick={() => {agregarAFavoritos(productoAMostrar._id, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea);
          }}
        >
          <BsSuitHeart className="corazon-vacio"/>
          <BsSuitHeartFill className="corazon-lleno"/>
        </Button>
        }
        </div>
        <div className="col-md-5 contenedor-nombre-marca-stock-precio-pagina col-12 d-flex align-items-center flex-column justify-content-center">
          <p className="text-center nombre-pagina-producto my-2 col-10">{productoAMostrar.nombre}</p>
          <br className="d-none d-md-block" />
          <div className="d-flex flex-column col-12">
          <div className="col-12 d-flex flex-row justify-content-start align-items-center">
            <div className="d-flex contenedor-marca-pagina-producto flex-column col-5">
              <p className="text-center fs-5">Marca:</p>
              <p className="text-center fs-5">{productoAMostrar.marca}</p>
            </div>
            <div className="d-flex contenedor-categoria-pagina-producto flex-column col-4">
              <p className="text-center fs-5">Categoria:</p>
              <p className="text-center fs-5">
                {productoAMostrar.categoria}
              </p>
            </div>
            <div className="d-flex contenedor-stock-pagina-producto flex-column col-3">
              <p className="text-center fs-5">Stock:</p>
              <p className="text-center fs-5">{productoAMostrar.stock}</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row col-12 justify-content-evenly align-items-center">
            <p className="precio-pagina-producto col-md-7 align-self-center text-center">
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(productoAMostrar.precio)}
            </p>
            <div className="d-flex flex-row flex-md-column justify-content-evenly col-12 col-sm-12 col-md-4 mb-4">
                <Button variant="success my-md-2">Agregar al Carrito</Button>
                <Button className="my-md-2">Comprar</Button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="d-flex p-2 py-md-2 px-md-3 rounded contenedor-descripcion-pagina-producto flex-column col-md-11 col-lg-9">
      <p className="col-lg-8 m-0 fs-5">Descripcion:</p>
      <section className="descripcion-pagina-producto">{productoAMostrar.descripcion}</section>
      </div>
    </div>
  );
};

export default ContenidoPaginaProducto;
