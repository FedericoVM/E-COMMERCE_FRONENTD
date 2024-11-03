import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'
import PaginacionControl from './PaginacionControl'
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook'

const MostrarProductosSm = ({ currentPostsSm, totalPosts, page}) => {
    const {currentPageMobile, paginateMobile} = ProductosHook()

    return (
        <Row xs={2} className=" g-4 d-flex justify-content-center d-md-none d-lg-none mt-3 ">
            {currentPostsSm.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap mt-3 p-2">
                    <ProductCard p={p}/>
                </Col>
            ))}
            <div>
                <PaginacionControl
                    postsPerPage={page}
                    totalPosts={totalPosts}
                    paginate={paginateMobile}
                    currentPage={currentPageMobile}
                />
            </div>
        </Row>
    )
}

export default MostrarProductosSm