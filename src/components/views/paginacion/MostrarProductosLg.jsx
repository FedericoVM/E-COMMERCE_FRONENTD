import React from 'react'
import PaginacionControl from './PaginacionControl'
import ProductCard from '../home/productCard/ProductCard'
import { Col, Row } from 'react-bootstrap'

const MostrarProductosLg = ({ currentPosts, paginate, currentPage, totalPosts, page,token,listaCarrito }) => {



    return (
        <Row className="g-4 d-none d-md-none d-lg-flex mt-3">
            {currentPosts.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap m-lg-3" lg={2}>
                    <ProductCard p={p} token ={token} listaCarrito={listaCarrito}/>
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

export default MostrarProductosLg