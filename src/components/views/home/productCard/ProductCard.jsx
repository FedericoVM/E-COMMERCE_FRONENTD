import { Button, Card } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import {FaCartArrowDown} from "react-icons/fa"
import { Link } from "react-router-dom";
import "./productCard.css";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const ProductCard = ({ p }) => {
  
  const { obtenerUsuarioFavoritos, tokenUser, obtenerCarritoUsuario, usuarioEnLinea } =
    UserHook();
  const { formatPrecio, agregarAlCarrito, agregarAFavoritos, eliminarDeFavoritos, cambiarBotonFavorito, productosFavoritosAMostrar} = ProductosHook();

  const favoritoExistente = cambiarBotonFavorito(usuarioEnLinea, productosFavoritosAMostrar, p._id)

  return (
    <Card className="card cards-productos">
      <div className="d-flex justify-content-center align-self-center col-10 col-md-12">
        <Card.Img
          className="card-img container border-bottom"
          variant="top"
          src={p.imagen}
        />
        <Card.Title className="text-white title-precio rounded">
          {formatPrecio(p.precio)}
        </Card.Title>
        {favoritoExistente === true ?
        <Button
        variant="primary"
          className="boton-favorito"
          onClick={()=> {
            eliminarDeFavoritos(p._id, tokenUser, obtenerUsuarioFavoritos)
          }}
        >
          <BsSuitHeartFill/>
        </Button>
        :
        <Button
          variant="primary"
          className="boton-favorito"
          onClick={() => {agregarAFavoritos(p._id, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea);
          }}
        >
          <BsSuitHeart className="corazon-vacio"/>
          <BsSuitHeartFill className="corazon-lleno"/>
        </Button>
        }
      </div>
      <Card.Body className="d-flex flex-column card-body">
        <div className="d-flex flex-column justify-content-around align-items-center">
          <Link to={`/producto/${p._id}`} className="col-12 d-flex juatify-content-start align-items-center contenedor-nombre-producto-card text-decoration-none col-12">
              <Card.Title className="text-dark p-0 m-0 nombre-producto">{p.nombre}</Card.Title>
          </Link>
          <div className="d-flex flex-column flex-sm-row flex-md-column justify-content-center align-items-center col-12">
          <div className="d-flex col-12 contenedor-marca-stock-producto flex-row col-md-12 border-warning border-top border-bottom border-1 col-sm-8 rounded text-center align-items-center flex-sm-row justify-content-sm-around">
            <div className="d-flex flex-column border-warning col-7 col-sm-6 col-md-7 align-items-center">
            <Card.Text className="marca-producto-card m-0 p-0 text-descripcion-marca">{p.marca}</Card.Text>
            </div>
            <div className="d-flex col-sm-5 flex-sm-column justify-content-center align-items-center col-sm-6 contenedor-stock-producto col-md-5">
            <Card.Text className="m-0 p-sm-0 text-descripcion col-sm-12 col-md-11 col-lg-12">Stock: </Card.Text>
            <Card.Text className="m-0 px-1 p-sm-0 text-descripcion col-sm-12 col-md-11 col-lg-12">{p.stock}</Card.Text>
            </div>
          </div>
          <div className="d-flex flex-row col-12 flex-sm-column col-sm-4 col-md-12 justify-content-center flex-md-row">
            <button
              type="button"
              className="btn col-3 col-sm-11 btn-primary p-1 m-1 col-md-4 col-lg-4"
              onClick={() => {agregarAlCarrito(p._id, obtenerCarritoUsuario, tokenUser, usuarioEnLinea)
              }}
            >
               <FaCartArrowDown/>
            </button>
            <button 
             type="button"
             className="btn btn-primary col-7 col-sm-11 col-md-6 col-lg-7 boton-comprar-card p-1 m-1"
             >
              Comprar
            </button>
          </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;