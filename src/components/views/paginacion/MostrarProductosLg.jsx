import PaginacionControl from './PaginacionControl'
import ProductCard from '../home/productCard/ProductCard'
import { Col, Row } from 'react-bootstrap'
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook'

const MostrarProductosLg = ({ currentPosts, totalPosts, page }) => {
    const {currentPageWeb, paginateWeb} = ProductosHook()
    
    return (
        <div className='d-flex flex-column'>
        <Row lg={5} className="g-4 d-none mx-0 d-md-none d-lg-flex mt-3 col-12">
            {currentPosts.map((p, index) => (
                <Col key={index} className="d-flex justify-content-center">
                    <ProductCard p={p}/>
                </Col>
            ))}
        </Row>
        <div className="d-flex justify-content-center d-none mx-0 d-md-none d-lg-flex align-items-center">
                <PaginacionControl
                    postsPerPage={page}
                    totalPosts={totalPosts}
                    paginate={paginateWeb}
                    currentPage={currentPageWeb}
                />
            </div>
        </div>
    )
}

export default MostrarProductosLg