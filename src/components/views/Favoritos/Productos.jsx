import { Button, Table } from "react-bootstrap";
import {BsTrash} from 'react-icons/bs'

const Productos = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }

  return (
    <Table striped bordered hover variant="dark" className='container w-75'>
  <thead>
    <tr>
      <th className="text-center">Imagen</th>
      <th className="text-center">Producto</th>
      <th className="text-center">Stock</th>
      <th className="text-center">Precio</th>
      <th className="text-center">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {posts.map((product, index) =>(<tr key={index}>
        <td className="col-2 text-center td-favoritos"><img src={product.thumbnailUrl} alt="" className='imagen-lista-productos' /></td>
        <td className="col-4 text-center td-favoritos">{product.title}</td>
        <td className="col-3 text-center td-favoritos">{product.id}</td>
        <td className="col-2 text-center td-favoritos">{product.albumId}</td>
        <td className="col-1 text-center td-favoritos"><Button variant="danger"><BsTrash/></Button></td>
      </tr>))}
      </tbody>
</Table>
    
  )
}

export default Productos