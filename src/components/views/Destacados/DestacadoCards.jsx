import { Button, Card } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import "./destacado-card.css";
import { Link } from "react-router-dom";
import ModalEsperaPagoBack from "../Modal espera pago/ModalEsperaPagoBack";
import EliminarFavorito from "../../layout/boton favorito/EliminarFavorito";
import AgregarFavorito from "../../layout/boton favorito/AgregarFavorito";

const DestacadoCards = ({ post }) => {
  const {
    productosHome,
    formatPrecio,
    formatPrecioDescuento,
    agregarAlCarrito,
    agregarAFavoritos,
    eliminarDeFavoritos,
    cambiarBotonFavorito,
    productosFavoritosAMostrar,
    comprarProducto,
  } = ProductosHook();
  const {
    obtenerUsuarioFavoritos,
    tokenUser,
    obtenerCarritoUsuario,
    usuarioEnLinea,
  } = UserHook();

  const favoritoExistenteDes = cambiarBotonFavorito(
    usuarioEnLinea,
    productosFavoritosAMostrar,
    post._id
  );

  return (
    <div className="mx-1 contenedor-card-destacado">
      <Card className="col-12">
        <div className="d-flex justify-content-center">
          <Card.Img
            className="border-bottom imagen-destacado"
            variant="top"
            src={post.imagen}
          />
          <div className="contenedor-precios-destacado rounded">
            <div className="d-flex flex-row align-items-center">
              <p className="m-0 porcentaje-card-destacado">-{post.descuento}%</p>
              <p className="m-0 precio-sin-descuento mx-1">{formatPrecio(post.precio)}</p>
            </div>
            <p className="m-0 text-center text-white">
              {formatPrecioDescuento(productosHome, post._id)}
            </p>
          </div>
          {favoritoExistenteDes ? 
            <EliminarFavorito eliminarFavorito={()=>{eliminarDeFavoritos(post._id, tokenUser, obtenerUsuarioFavoritos)}}/>
            :
            <AgregarFavorito agregarAFavorito={()=>agregarAFavoritos(post._id, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea)}/>}
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
            {/*<ModalEsperaPagoBack
              comprarProducto={() => {
                comprarProducto(post._id, tokenUser);
              }}
              classPropiedad={
                "opacity-75 fs-6 boton-comprar-destacado"
              }
            />*/}
            <Button className="opacity-75 fs-6 boton-comprar-destacado" onClick={()=>{comprarProducto(post._id, tokenUser)}}>Comprar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DestacadoCards;
