import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'
import PaginacionControl from './PaginacionControl'
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook'

const MostrarProductosMd = ({ currentPostsMd, totalPosts, page }) => {
    const {currentPageTablet, paginateTablet} = ProductosHook()

    return (
        <Row md={4} className=" g-4 d-none justify-content-center d-lg-none d-md-flex mt-3">
            {currentPostsMd.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap">
                    <ProductCard p={p}/>
                </Col>
            ))}
            <div>
                <PaginacionControl
                    postsPerPage={page}
                    totalPosts={totalPosts}
                    paginate={paginateTablet}
                    currentPage={currentPageTablet}
                />
            </div>
        </Row>
    )
}

export default MostrarProductosMd