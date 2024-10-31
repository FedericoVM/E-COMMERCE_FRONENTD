import Paginacion from '../paginacion/Paginacion';

const Destacados = ({productos}) => {

  const nuevoArray = productos.filter(producto => producto.destacado === true)

  return (
    <div className='d-flex flex-column' style={{minHeight: '100vh'}}>
        <h2 className='text-center'>Destacados</h2>
        <Paginacion card="destacados" lista={nuevoArray}/>
    </div>
  )
}

export default Destacados