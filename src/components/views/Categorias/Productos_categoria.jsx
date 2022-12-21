import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductosCard from './ProductosCard';
import { useState } from 'react';
import Pagination from './Pagination';

const ProductosCategorias = ({ productos, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTablet, setCurrentPageTablet] = useState(1);
  const [currentPageMovil, setCurrentPageMovil] = useState(1);
  const [postsPerPage] = useState(15);
  const [postsPerPageTablet] = useState(12);
  const [postsPerPageMovil] = useState(10)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateTablet = (pageNumber) => setCurrentPageTablet(pageNumber);
  const paginateMovil = (pageNumber) => setCurrentPageMovil(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPost) ;
 

  const indexOfLastPostTablet = currentPageTablet * postsPerPageTablet;
  const indexOfFirstPostTablet = indexOfLastPostTablet - postsPerPageTablet;
  const currentPostsTablet = productos.slice(indexOfFirstPostTablet, indexOfLastPostTablet);

  const indexOfLastPostMovil = currentPageMovil * postsPerPageMovil;
  const indexOfFirstPostMovil = indexOfLastPostMovil - postsPerPageMovil;
  const currentPostsMovil = productos.slice(indexOfFirstPostMovil, indexOfLastPostMovil);

  return (
    <div className='vh-100 d-flex flex-row justify-content-center container'>
      <div className='d-none d-lg-block col-10'>
    <Row lg={5} className="">
      {currentPosts.map((producto, index) => (
        <Col key={index}>
      <ProductosCard producto={producto} loading={loading}/>
      </Col>))}
    </Row>
    <Pagination
            postsPerPage={postsPerPage}
            totalPosts={productos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          </div>
          <div className='d-none d-sm-block d-lg-none vh-100'>
          <Row md={3}>
            {currentPostsTablet.map((producto, index) => (
              <Col key={index}>
                <ProductosCard producto={producto} loading={loading}/>
              </Col>
            ))}
          </Row>
          <Pagination  postsPerPage={postsPerPageTablet}
            totalPosts={productos.length}
            paginate={paginateTablet}
            currentPage={currentPageTablet}/>
            </div>
            <div className='d-block d-sm-none'>
    <Row xs={2} className="">
      {currentPostsMovil.map((producto, index) => (
        <Col key={index}>
      <ProductosCard producto={producto} loading={loading}/>
      </Col>))}
    </Row>
    <Pagination
            postsPerPage={postsPerPageMovil}
            totalPosts={productos.length}
            paginate={paginateMovil}
            currentPage={currentPageMovil}
          />
          </div>
          <div className='d-none container bg-success text-center d-lg-block col-2 d-flex align-self-center'>
            Publicidad
          </div>
    </div>
  )
}

export default ProductosCategorias