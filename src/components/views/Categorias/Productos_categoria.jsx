import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductosCard from './ProductosCard';
import { useState } from 'react';
import PaginacionControl from '../paginacion/PaginacionControl';
import Paginacion from '../paginacion/Paginacion';

const ProductosCategorias = ({productos, card}) => {
 

  return (
    <div className='vh-100 d-flex flex-row justify-content-center container'>
      <Paginacion lista = {productos}  card = {card} />
      <div className='d-none container bg-success text-center d-lg-block col-2 d-flex align-self-center'>
        Publicidad
      </div>
    </div>
  )
}

export default ProductosCategorias