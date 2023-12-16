import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'
import PaginacionControl from './PaginacionControl'

const MostrarProductosMd = ({ currentPostsMd, paginate, currentPage, totalPosts, page,token,listaCarrito }) => {
    return (
        <Row className=" g-4 d-none d-lg-none d-md-flex mt-3">
            {currentPostsMd.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap m-lg-3" md={4}>
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
    )
}

export default MostrarProductosMd