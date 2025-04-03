import React from 'react'
import Paginacion from '../paginacion/Paginacion';
import Publicidad from '../home/Publicidad/Publicidad';

const ProductosCategorias = ({productos, card, categoria}) => {
 
  return (
    <div className='mx-0 d-flex row'>
      <div className='col-lg-10 d-flex flex-column'>
        <h2 className='my-2 align-self-center text-center titulos-de-paginas'>{categoria}</h2>
      <Paginacion lista = {productos}  card = {card}/>
      </div>
      <div className='d-none d-lg-inline col-2 d-flex'>
        <Publicidad/>
      </div>
    </div>
  )
}

export default ProductosCategorias