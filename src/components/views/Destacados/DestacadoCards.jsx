import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';

const DestacadoCards = ({ post}) => {

  const [favoritoExistenteDes, setFavoritoExistenteDes] = useState(false)

  const {formatPrecio, agregarAlCarrito, agregarAFavoritos, eliminarDeFavoritos, cambiarBotonFavorito} = ProductosHook()
  const { obtenerUsuarioFavoritos, tokenUser, obtenerCarritoUsuario, usuarioEnLinea, usuarioFavoritos} =
    UserHook();

    useEffect(() => {
      cambiarBotonFavorito(post._id, usuarioEnLinea, usuarioFavoritos, setFavoritoExistenteDes)
    },[usuarioFavoritos])
  
  return (
    <>
          <Card>
            <div>
            <Card.Img className='border-bottom' variant="top" src={post.imagen} />
            <Card.Title className='text-white title-precio rounded'>{formatPrecio(post.precio)}</Card.Title>
            {favoritoExistenteDes ? 
            <Button variant='primary' className='boton-favorito' onClick={()=> {
              eliminarDeFavoritos(post._id, tokenUser, obtenerUsuarioFavoritos);
              setFavoritoExistenteDes(false)
            }}><BsSuitHeartFill/>
            </Button>:
            <Button variant='primary' className='boton-favorito' onClick={()=> {
              if (usuarioEnLinea) {
              agregarAFavoritos(post._id, obtenerUsuarioFavoritos, tokenUser);
            } else {
              console.log("Tiene que iniciar sesion");
            }
            }}><BsSuitHeart/>
            </Button>
        }
            </div>
            <Card.Body className='d-flex flex-column'>
                <div className=''>
                    <div className='d-flex justify-content-between container'>
              <Card.Title className='text-primary'>{post.nombre}</Card.Title>
              </div>
              <p className='bg-primary bg-opacity-10 rounded descripcion-card-producto'>
                {post.descripcion}
              </p>
              </div>
              <div className='d-flex justify-content-around'>
                <Button variant='success' className='opacity-75 w-25 fs-3' onClick={() => {
                agregarAlCarrito(post._id, obtenerCarritoUsuario, tokenUser);
              }}><MdShoppingCart/></Button>
                <Button variant='warning' className='opacity-75 fs-4'>Comprar</Button>
              </div>
            </Card.Body>
          </Card>
    </>
  )
}

export default DestacadoCards