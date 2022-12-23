import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductosCard = ({producto}) => {
  return (
    <div className='my-2'><Card  className="card shadow-lg border m-sx-3 ">
    <div>
      <Card.Img
        className="card-img border-bottom imagen-card-electro"
        variant="top"
        src={producto.imagen}
      />
      <Card.Title className="text-white title-precio rounded">
        ${producto.precio}
      </Card.Title>
      <Button variant="primary" className="boton-favorito">
        F
      </Button>
    </div>
    <Card.Body className="h-100 d-flex flex-column ">
      <div>
        <Link to="/product" className="text-decoration-none">
          <div className="d-flex justify-content-between p-0">
            <Card.Title className="text-dark text-center w-100 descripcion-card-producto">{producto.nombre}</Card.Title>
          </div>
        </Link>
      </div>
    </Card.Body>
  </Card></div>
  )
}

export default ProductosCard