import React from 'react'
import Paginacion from '../paginacion/Paginacion';

const ProductosCategorias = ({productos, card}) => {
 

  return (
    <div className='container d-flex flex-row justify-content-center'>
      <Paginacion lista = {productos}  card = {card}/>
      <div className='d-none bg-success text-center d-lg-block col-2 d-flex align-self-center'>
        Publicidad
      </div>
    </div>
  )
}

export default ProductosCategorias