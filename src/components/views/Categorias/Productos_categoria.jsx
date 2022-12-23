import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductosCard from './ProductosCard';
import { useState } from 'react';
import Pagination from './Pagination';

const ProductosCategorias = ({ products }) => {
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
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost) ;
 

  const indexOfLastPostTablet = currentPageTablet * postsPerPageTablet;
  const indexOfFirstPostTablet = indexOfLastPostTablet - postsPerPageTablet;
  const currentPostsTablet = products.slice(indexOfFirstPostTablet, indexOfLastPostTablet);

  const indexOfLastPostMovil = currentPageMovil * postsPerPageMovil;
  const indexOfFirstPostMovil = indexOfLastPostMovil - postsPerPageMovil;
  const currentPostsMovil = products.slice(indexOfFirstPostMovil, indexOfLastPostMovil);

  return (
    <div className='vh-100 d-flex flex-row justify-content-around'>
      <div className='d-none d-lg-block w-75 mx-5'>
    <Row lg={5} className="">
      {currentPosts.map((producto, index) => (
        <Col key={index}>
      <ProductosCard producto={producto} />
      </Col>))}
    </Row>
    <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          </div>
          <div className='d-none d-sm-block d-lg-none vh-100'>
          <Row md={3}>
            {currentPostsTablet.map((producto, index) => (
              <Col key={index}>
                <ProductosCard producto={producto}/>
              </Col>
            ))}
          </Row>
          <Pagination  postsPerPage={postsPerPageTablet}
            totalPosts={products.length}
            paginate={paginateTablet}
            currentPage={currentPageTablet}/>
            </div>
            <div className='d-block d-sm-none'>
    <Row xs={2} className="">
      {currentPostsMovil.map((producto, index) => (
        <Col key={index}>
      <ProductosCard producto={producto}/>
      </Col>))}
    </Row>
    <Pagination
            postsPerPage={postsPerPageMovil}
            totalPosts={products.length}
            paginate={paginateMovil}
            currentPage={currentPageMovil}
          />
          </div>
          <div className='d-none d-lg-block d-flex'>
          <img
              className="publicidad-img w-75 h-100"
             src="https://github.com/leanceballos30/Proyecto-Final/blob/home/src/assets/img/main/publicidad.jpg?raw=true"
              alt="publicidad_intel"
            />
          </div>
    </div>
  )
}

export default ProductosCategorias