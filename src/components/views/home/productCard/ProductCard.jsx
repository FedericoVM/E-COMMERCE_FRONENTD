import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./productCard.css";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const ProductCard = ({ p }) => {

  const [favoritoExistente, setFavoritoExistente] = useState(false)
  
  const { obtenerUsuarioFavoritos, tokenUser, obtenerCarritoUsuario, usuarioEnLinea, usuarioFavoritos } =
    UserHook();
  const { formatPrecio, agregarAlCarrito, agregarAFavoritos, eliminarDeFavoritos, cambiarBotonFavorito } = ProductosHook();

  useEffect(() => {
    cambiarBotonFavorito(p._id, usuarioEnLinea, usuarioFavoritos, setFavoritoExistente)
  },[usuarioFavoritos])

  return (
    <Card className="card shadow-lg border m-sx-3 ">
      <div>
        <Card.Img
          className="card-img border-bottom img-fluid"
          variant="top"
          src={p.imagen}
        />
        <Card.Title className="text-white title-precio rounded">
          {formatPrecio(p.precio)}
        </Card.Title>
        {favoritoExistente ?
        <Button
        variant="primary"
          className="boton-favorito"
          onClick={()=> {
            eliminarDeFavoritos(p._id, tokenUser, obtenerUsuarioFavoritos);
            setFavoritoExistente(false)
          }}
        >
          <BsSuitHeartFill/>
        </Button>
        :
        <Button
          variant="primary"
          className="boton-favorito"
          onClick={() => { if (usuarioEnLinea) {
            agregarAFavoritos(p._id, obtenerUsuarioFavoritos, tokenUser);
          } else {
            console.log("Tiene que iniciar sesion");
          }
          }}
        >
          <BsSuitHeart />
        </Button>
        }
      </div>
      <Card.Body className="h-100 d-flex flex-column ">
        <div>
          <Link to={`/producto/${p._id}`} className="text-decoration-none">
            <div className="d-flex justify-content-between container p-0 text-center  h-100">
              <Card.Title className="text-dark ">{p.nombre}</Card.Title>
            </div>
          </Link>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => { if (usuarioEnLinea){
                agregarAlCarrito(p._id, obtenerCarritoUsuario, tokenUser)
              } else {
                console.log("tiene que iniciar sesion");
              }
              }}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
