import Paginacion from '../paginacion/Paginacion';

const Destacados = ({ productos,token,listaCarrito }) => {

  const nuevoArray = productos.filter(producto => producto.destacado === true)


  return (
    <div className='d-flex'>
      <div className='container col-12 col-md-9'>
        <h2 className='my-3 text-center'>Destacados</h2>
        <Paginacion card="destacados" lista={nuevoArray} token={token} listaCarrito={listaCarrito}/>
      </div>
    </div>
  )
}

export default Destacados