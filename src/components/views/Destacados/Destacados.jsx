import Paginacion from '../paginacion/Paginacion';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';

const Destacados = ( ) => {

  const {productosHome} = ProductosHook()

  const nuevoArray = productosHome.filter(producto => producto.destacado === true)


  return (
    <div className='d-flex'>
      <div className='container col-12 col-md-9'>
        <h2 className='my-3 text-center'>Destacados</h2>
        <Paginacion card="destacados" lista={nuevoArray}/>
      </div>
    </div>
  )
}

export default Destacados