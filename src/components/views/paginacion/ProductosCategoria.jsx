import { Col, Row } from 'react-bootstrap'
import PaginacionControl from './PaginacionControl'
import ProductCard from '../home/productCard/ProductCard'
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook'

const ProductosCategoria = ({ currentPosts, currentPostsMd, currentPostsSm, totalPosts, page}) => {
    const {currentPageWeb, paginateWeb, currentPageTablet, paginateTablet ,currentPageMobile, paginateMobile} = ProductosHook()

    return (
        <>
            <div className='d-none d-lg-block'>
                <Row lg={5} className="g-3 d-lg-flex mt-1">
                    {currentPosts.map((p, index) => (
                        <Col key={index} className='d-flex justify-content-center'>
                            <ProductCard p={p}/>
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPageWeb} paginate={paginateWeb} />
            </div>
            <div className='d-none d-lg-none d-md-flex flex-column mt-3'>
                <Row md={4} className='g-3 d-flex mt-1'>
                    {currentPostsMd.map((p, index) => (
                        <Col key={index} className='d-flex flex-wrap m-lg-3'>
                            <ProductCard p={p}/>
                        </Col>
                    ))}
                </Row>
                <PaginacionControl postsPerPage={page-3} totalPosts={totalPosts} currentPage={currentPageTablet} paginate={paginateTablet} />
            </div>
            <div className='d-md-none d-lg-none mt-1'>
                <Row xs={2} className="g-3 d-flex mt-1">
                    {currentPostsSm.map((p, index) => (
                        <Col key={index} className=''>
                            <ProductCard p={p}/>
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page-5} totalPosts={totalPosts} currentPage={currentPageMobile} paginate={paginateMobile} />
            </div>
        </>

    )
}

export default ProductosCategoria