import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsSuitHeartFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import PaginacionControl from '../paginacion/PaginacionControl';
import ProductCard from '../home/productCard/ProductCard';

const ProductosDestacados = ({ paginate, currentPage, page, totalPosts, currentPosts,token,listaCarrito }) => {
  return (
    <>
      <Row className="g-4">
        {currentPosts.map((p, idx) => (
          <Col xs={12} sm={6} md={4} lg={3} key={idx}>
            <ProductCard p={p} token={token} listaCarrito={listaCarrito} />
          </Col>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <PaginacionControl
            postsPerPage={page}
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </Row>
    </>
  )
}

export default ProductosDestacados