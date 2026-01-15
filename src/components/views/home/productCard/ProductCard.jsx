import { Button, Card } from "react-bootstrap";
import {FaCartArrowDown} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import "./productCard.css";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import PrecioSinDescuentoCard from "./PrecioSinDescuentoCard";
import PrecioConDescuentoCard from "./PrecioConDescuentoCard";
import AgregarFavorito from "../../../layout/boton favorito/AgregarFavorito";
import EliminarFavorito from "../../../layout/boton favorito/EliminarFavorito";

const ProductCard = ({ p }) => {

  const navigate = useNavigate()
  
  const { obtenerUsuarioFavoritos, tokenUser, obtenerCarritoUsuario, usuarioEnLinea, usuarioFavoritos, cambiarBotonFavorito} =
    UserHook();
  const { formatPrecio, agregarAlCarrito, agregarAFavoritos, eliminarDeFavoritos, comprarProducto} = ProductosHook();

  const favoritoExistente = cambiarBotonFavorito(usuarioEnLinea, usuarioFavoritos, p._id)

  return (
    <Card className="card cards-productos">
      <div className="img-contenedor-card d-flex justify-content-center align-self-center col-12">
        <Card.Img
          className="card-img container border-bottom"
          variant="top"
          src={p.imagen}
        />
        {p.destacado && <Card.Title className="text-decoration-line-through px-1 fw-semibold title-precio rounded">
          {formatPrecio(p.precio)}
        </Card.Title>}
        {favoritoExistente === true ?
        <EliminarFavorito eliminarFavorito={()=>{eliminarDeFavoritos(p._id, tokenUser, obtenerUsuarioFavoritos)}}/>
        :
        <AgregarFavorito agregarAFavorito={()=>agregarAFavoritos(p._id, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea)}/>
        }
        {p.destacado && <p className="destacado-D-Card m-0 px-1 rounded">Destacado</p>}
      </div>
      <Card.Body className="d-flex flex-column card-body">
        <div className="d-flex flex-column justify-content-around align-items-center">
          <Link to={`/producto/${p._id}`} className="col-12 d-flex juatify-content-start align-items-center contenedor-nombre-producto-card text-decoration-none col-12">
              <Card.Title className="text-dark p-0 m-0 nombre-producto">{p.nombre}</Card.Title>
          </Link>
          <div className="d-flex flex-column flex-sm-row flex-md-column justify-content-center align-items-center col-12">
          <div className="d-flex col-12 flex-column contenedor-marca-stock-producto col-md-12 border-warning border-top border-bottom border-1 col-sm-8 rounded text-center align-items-center justify-content-sm-around">
            <div className="d-flex flex-row col-12 align-items-center contenedor-marca-stock-producto-under-sm">
            <div className="d-flex flex-column border-warning col-7 col-sm-6 col-md-7 align-items-center">
            <Card.Text className="marca-producto-card m-0 p-0 text-descripcion-marca">{p.marca}</Card.Text>
            </div>
            <div className="d-flex col-sm-5 flex-sm-column justify-content-center align-items-center col-sm-6 contenedor-stock-producto col-md-5">
            <Card.Text className="m-0 p-sm-0 text-descripcion col-sm-12 col-md-11 col-lg-12">Stock: </Card.Text>
            <Card.Text className="m-0 px-1 p-sm-0 text-descripcion col-sm-12 col-md-11 col-lg-12">{p.stock}</Card.Text>
            </div>
            </div>
            {p.destacado ? <PrecioConDescuentoCard producto={p}/> : <PrecioSinDescuentoCard producto={p}/>}
          </div>
          <div className="d-flex flex-row col-12 flex-sm-column col-sm-4 col-md-12 justify-content-center flex-md-row">
            <button
              type="button"
              className="btn col-3 col-sm-11 boton-carrito-card p-1 m-1 col-md-4 col-lg-4"
              onClick={() => {agregarAlCarrito(p._id, obtenerCarritoUsuario, tokenUser, usuarioEnLinea)
              }}
            >
               <FaCartArrowDown/>
            </button>
            <Button className='col-7 col-sm-11 col-md-6 col-lg-7 boton-comprar-card p-1 m-1' onClick={()=>comprarProducto({idProducto:p._id, tokenUser, navigate})}>Comprar</Button>
          </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;