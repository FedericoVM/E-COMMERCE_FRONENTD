import React from 'react'
import Paginacion from '../paginacion/Paginacion';

const ProductosCategorias = ({productos, card ,token,listaCarrito}) => {
 

  return (
    <div className='vh-100 d-flex flex-row justify-content-center container'>
      <Paginacion lista = {productos}  card = {card} token={token} listaCarrito={listaCarrito} />
      <div className='d-none container bg-success text-center d-lg-block col-2 d-flex align-self-center'>
        Publicidad
      </div>
    </div>
  )
}

export default ProductosCategorias