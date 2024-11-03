import { Button, Card } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import "./destacado.css";
import { Link } from "react-router-dom";

const DestacadoCards = ({ post }) => {

  const {
    formatPrecio,
    agregarAlCarrito,
    agregarAFavoritos,
    eliminarDeFavoritos,
    cambiarBotonFavorito,
    productosFavoritosAMostrar
  } = ProductosHook();
  const {
    obtenerUsuarioFavoritos,
    tokenUser,
    obtenerCarritoUsuario,
    usuarioEnLinea,
  } = UserHook();

  const favoritoExistenteDes = cambiarBotonFavorito(usuarioEnLinea, productosFavoritosAMostrar, post._id)

  return (
    <div className="mx-1 contenedor-card-destacado">
      <Card className="col-12">
        <div className="d-flex justify-content-center">
          <Card.Img
            className="border-bottom imagen-destacado"
            variant="top"
            src={post.imagen}
          />
          <Card.Title className="text-white title-precio rounded">
            {formatPrecio(post.precio)}
          </Card.Title>
          {favoritoExistenteDes ? (
            <Button
              variant="primary"
              className="boton-favorito"
              onClick={() => {
                eliminarDeFavoritos(
                  post._id,
                  tokenUser,
                  obtenerUsuarioFavoritos
                );
              }}
            >
              <BsSuitHeartFill />
            </Button>
          ) : (
            <Button
              variant="primary"
              className="boton-favorito"
              onClick={() => {
                agregarAFavoritos(
                  post._id,
                  obtenerUsuarioFavoritos,
                  tokenUser,
                  usuarioEnLinea
                );
              }}
            >
              <BsSuitHeart className="corazon-vacio"/>
          <BsSuitHeartFill className="corazon-lleno"/>
            </Button>
          )}
        </div>
        <Card.Body className="d-flex flex-column card-destacado-body">
          <div className="d-flex flex-column">
            <Link to={`/producto/${post._id}`} className="text-decoration-none">
            <div className="d-flex justify-content-between container">
              <Card.Title className="text-primary text-dark card-destacado-nombre-producto">
                {post.nombre}
              </Card.Title>
            </div>
            </Link>
            <p className="border-bottom mx-2 rounded descripcion-card-producto">
              {post.descripcion}
            </p>
          </div>
          <div className="d-flex justify-content-around">
            <Button
              variant="warning"
              className="opacity-75 w-25 boton-carrito-destacado"
              onClick={() => {
                agregarAlCarrito(
                  post._id,
                  obtenerCarritoUsuario,
                  tokenUser,
                  usuarioEnLinea
                );
              }}
            >
              <MdShoppingCart className="fs-4" />
            </Button>
            <Button variant="success" className="opacity-75 fs-6 boton-comprar-destacado">
              Comprar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DestacadoCards;
