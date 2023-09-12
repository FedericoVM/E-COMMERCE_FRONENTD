import React from 'react'
import ProductosCard from '../Categorias/ProductosCard'
import { Col, Row } from 'react-bootstrap'
import PaginacionControl from './PaginacionControl'

const ProductosCategoria = ({currentPosts,paginate,currentPage,totalPosts,page}) => {
    return (
        // <div className='my-2'><Card className="card shadow-lg border m-sx-3 ">
        //     <div>
        //         <Card.Img
        //             className="card-img border-bottom img-fluid"
        //             variant="top"
        //             src={producto.imagen}
        //         />
        //         <Button variant="primary" className="boton-favorito">
        //             F
        //         </Button>
        //     </div>
        //     <Card.Body className="h-100 d-flex flex-column ">
        //         <div>
        //             <Link to="/product" className="text-decoration-none">
        //                 <div className="d-flex justify-content-between container p-0 text-center  h-100">
        //                     <Card.Title className="text-dark descripcion-card-producto">{producto.nombre}</Card.Title>
        //                 </div>
        //             </Link>
        //         </div>
        //     </Card.Body>
        // </Card></div>
        <>
            <div className='d-none d-lg-block col-10'>
                <Row lg={5} className="">
                    {currentPosts.map((producto, index) => (
                        <Col key={index}>
                            <ProductosCard producto={producto}  />
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
            <div className='d-none d-sm-block d-lg-none vh-100'>
                <Row md={3}>
                    {currentPosts.map((producto, index) => (
                        <Col key={index}>
                            <ProductosCard producto={producto} />
                        </Col>
                    ))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
            <div className='d-block d-sm-none'>
                <Row xs={2} className="">
                    {currentPosts.map((producto, index) => (
                        <Col key={index}>
                            <ProductosCard producto={producto} />
                        </Col>))}
                </Row>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} currentPage={currentPage} paginate={paginate} />
            </div>
        </>

    )
}

export default ProductosCategoria