import Paginacion from '../paginacion/Paginacion';

const Destacados = ({productos}) => {

  const nuevoArray = productos.filter(producto => producto.destacado === true)

  return (
    <div className='d-flex flex-column w-100' style={{minHeight: '100vh'}}>
        <h2 className='text-center align-self-center my-2 titulos-de-paginas rounded'>Destacados</h2>
        <Paginacion card="destacados" lista={nuevoArray}/>
    </div>
  )
}

export default Destacados