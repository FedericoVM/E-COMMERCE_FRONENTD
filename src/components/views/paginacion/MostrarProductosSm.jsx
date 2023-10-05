import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'
import PaginacionControl from './PaginacionControl'

const MostrarProductosSm = ({ currentPostsSm, paginate, currentPage, totalPosts, page }) => {
    return (
        <Row className=" g-4 d-flex d-md-none d-lg-none mt-3 ">
            {currentPostsSm.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap m-lg-3" xs={6} sm={5}>
                    <ProductCard p={p} />
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
    )
}

export default MostrarProductosSm