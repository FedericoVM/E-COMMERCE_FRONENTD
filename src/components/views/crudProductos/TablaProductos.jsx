import React from 'react';
import { Button } from 'react-bootstrap';
import  Table  from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import instance from '../../../assets/api/axios';

const TablaProductos = ({products, getApi}) => {

  const eliminarProducto = async(codigo) => {
    try {
      await instance.delete(`/productos/${codigo}`)
      getApi()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='my-3 contenedor-tabla-productos'>
         <Table bordered hover className='text-center tabla-de-productos'>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Marca</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((producto, index) => (
            <tr key={index}>
                <td>{producto.codigo}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.categoria}</td>
                <td>{producto.marca}</td>
                <td>{producto.stock}</td>
                <td><div className='d-flex'><Button className='mx-1' onClick={()=>{eliminarProducto(producto._id)}}>E</Button><Link to={`/editar-producto/${producto.codigo}`} className="btn btn-primary mx-1">U</Link></div></td>
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default TablaProductos