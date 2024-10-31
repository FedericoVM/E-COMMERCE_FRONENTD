import React from 'react'
import Paginacion from '../paginacion/Paginacion';

const ProductosCategorias = ({productos, card}) => {
 
  return (
    <div className='mx-0 d-flex row'>
      <div className='col-lg-10'>
      <Paginacion lista = {productos}  card = {card}/>
      </div>
      <div className='d-none bg-success text-center d-lg-inline publicidad col-2 d-flex align-self-center'>
        Publicidad
      </div>
    </div>
  )
}

export default ProductosCategorias