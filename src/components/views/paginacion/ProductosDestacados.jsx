import { Col, Row } from 'react-bootstrap';
import PaginacionControl from '../paginacion/PaginacionControl';
import DestacadoCards from '../Destacados/DestacadoCards';

const ProductosDestacados = ({ paginate, currentPage, page, totalPosts, currentPosts }) => {
  return (
    <>
      <Row className="g-4">
        {currentPosts.length > 0 ? currentPosts.map((post, idx) =>
         <Col xs={12} sm={6} md={4} key={idx}>
        <DestacadoCards post={post}/>
        </Col>): "cargando"}
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