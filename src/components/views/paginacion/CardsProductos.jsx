import React from 'react'
import PaginacionControl from './PaginacionControl'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'

const CardsProductos = ({currentPosts,paginate,currentPage,totalPosts,page}) => {
    return (
        <>
            {currentPosts.length > 0  ?   <div>
            <Row  className="g-4 d-none d-md-none d-lg-flex mt-3">
                {currentPosts.map((p, index) => (
                    <Col key={index} className="d-flex flex-wrap m-lg-3" lg={2}>
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
            <Row className=" g-4 d-none d-lg-none d-md-flex mt-3">
                {currentPosts.map((p, index) => (
                    <Col key={index} className="d-flex flex-wrap m-lg-3" md={4}>
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
            <Row className=" g-4 d-flex d-md-none d-lg-none mt-3 ">
                {currentPosts.map((p, index) => (
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
            </div> : <h1>Loading..</h1> }
        
        
        </>
    )
}

export default CardsProductos