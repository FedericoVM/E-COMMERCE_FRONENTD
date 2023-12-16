import React from 'react'
import ProductosCard from '../home/productCard/ProductCard'
import { Col, Row } from 'react-bootstrap'
import PaginacionControl from './PaginacionControl'
import ProductCard from '../home/productCard/ProductCard'

const ProductosCategoria = ({ currentPosts, paginate, currentPage, totalPosts, page,token,listaCarrito }) => {

    return (
        <>
            <div className='d-none d-lg-block col-10'>
                <Row lg={5} className="">
                    {currentPosts.map((p, index) => (
                        <Col key={index}>
                            <ProductCard p={p} token={token} listaCarrito={listaCarrito}/>
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
            <div className='d-none d-sm-block d-lg-none vh-100'>
                <Row md={3}>
                    {currentPosts.map((p, index) => (
                        <Col key={index}>
                            <ProductCard p={p} token={token} listaCarrito={listaCarrito} />
                        </Col>
                    ))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
            <div className='d-block d-sm-none'>
                <Row xs={2} className="">
                    {currentPosts.map((p, index) => (
                        <Col key={index}>
                            <ProductCard p={p} token={token} listaCarrito={listaCarrito}/>
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
        </>

    )
}

export default ProductosCategoria