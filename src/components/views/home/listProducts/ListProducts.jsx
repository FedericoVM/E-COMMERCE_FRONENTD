import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import PaginacionControl from "../../paginacion/PaginacionControl";

 const ListProducts = ({ productos }) => {
   const [pageLg] = useState(7);
   const [currentPage, setCurrentPage] = useState(1);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const indexOfLastPostLg = currentPage * pageLg;
   const indexOfFirstPost = indexOfLastPostLg - pageLg;
   const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPostLg);
  

  return (
    <>
      <Row className="g-4 d-none d-md-none d-lg-flex mt-3">
        {currentPosts.map((p, index) => (
          <Col key={index} className="d-flex flex-wrap m-lg-3" lg={2}>
            <ProductCard p={p} />
          </Col>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <PaginacionControl
            postsPerPage={pageLg}
            totalPosts={productos.length}
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
             postsPerPage={pageLg}
             totalPosts={productos.length}
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
           postsPerPage={pageLg}
           totalPosts={productos.length}
           paginate={paginate}
           currentPage={currentPage}
          />
        </div>
      </Row>
    </>
  );
};

export default ListProducts;
