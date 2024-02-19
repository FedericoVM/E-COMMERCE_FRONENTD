import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./productCard.css";
import instance from "../../../../axios/instance";

const ProductCard = ({ p,token,listaCarrito}) => {

  const agregarFavorito = async (productiId) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }

    const nuevoProductoFav = {
      productos: productiId
    }

    try {
      let productoAgregado = await instance.post("/favoritos",nuevoProductoFav,config);
      console.log(productoAgregado.data.mensaje);
    } catch (error) {
      console.log(error)
    }
  }

  const agregarCarrito = async (productId) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
   
  const nuevoProductoCarrito = {
    productos: productId
  }

    try {
        let resultado = await instance.post("/carrito/",nuevoProductoCarrito,config)
        console.log(resultado.data.mensaje);
        listaCarrito(token)
    } catch (error) {
       console.log(error)
    }
  }

  return (
    <Card  className="card shadow-lg border m-sx-3 ">
      <div>
        <Card.Img
          className="card-img border-bottom img-fluid"
          variant="top"
          src={p.imagen}
        />
        <Card.Title className="text-white title-precio rounded">
          ${p.precio}
        </Card.Title>
        <Button variant="primary" className="boton-favorito" onClick={() => {agregarFavorito(p._id)}}>
          <BsSuitHeartFill />
        </Button>
      </div>
      <Card.Body className="h-100 d-flex flex-column ">
        <div>
          <Link to={`/producto/${p._id}`} className="text-decoration-none">
            <div className="d-flex justify-content-between container p-0 text-center  h-100">
              <Card.Title className="text-dark ">{p.nombre}</Card.Title>
            </div>
          </Link>
          <div>
            <button type="button" className="btn btn-primary" onClick={()=>{agregarCarrito(p._id)}}>Añadir al carrito</button>
          </div>
        </div>
      </Card.Body>
    </Card>
    // <>
    //    <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={p.imagen}/>
    //   <Card.Body>
    //     <Card.Title>{p.nombre}</Card.Title>
    //     <Card.Text>
    //       <p>{p.precio}</p>
    //       <p></p>
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>

    // </>
  )
};

export default ProductCard;