import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import Paginacion from "../../paginacion/Paginacion";

 const ListProducts = ({ productos }) => {
   const [pageLg] = useState(8);
   const [currentPage, setCurrentPage] = useState(1);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const indexOfLastPostLg = currentPage * pageLg;
   const indexOfFirstPost = indexOfLastPostLg - pageLg;
   const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPostLg);
  

  const [pageMd] = useState(12);
  const [currentPageMd, setCurrentPageMd] = useState(1);
  const paginateMd = (pageNumber) => setCurrentPageMd(pageNumber);
  const indexOfLastPostMd = currentPageMd * pageMd;
  const indexOfFirstPostMd = indexOfLastPostMd - pageMd;
  const currentPostsMd = productos.slice(indexOfFirstPostMd, indexOfLastPostMd);

  const [pageSm] = useState(10);
  const [currentPageSm, setCurrentPageSm] = useState(1);
  const paginateSm = (pageNumber) => setCurrentPageSm(pageNumber);
  const indexOfLastPostSm = currentPageSm * pageSm;
  const indexOfFirstPostSm = indexOfLastPostSm - pageSm;
  const currentPostsSm = productos.slice(indexOfFirstPostSm, indexOfLastPostSm);

  return (
    <>
      <Row className="g-4 d-none d-md-none d-lg-flex mt-3">
        {currentPosts.map((p, index) => (
          <Col key={index} className="d-flex flex-wrap m-lg-3" lg={2}>
            <ProductCard p={p} />
          </Col>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <Paginacion
            postsPerPage={pageLg}
            totalPosts={productos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </Row>
      <Row className=" g-4 d-none d-lg-none d-md-flex mt-3">
        {currentPostsMd.map((p, index) => (
          <Col key={index} className="d-flex flex-wrap m-lg-3" md={4}>
            <ProductCard p={p} />
          </Col>
        ))}
        <div className="d-flex justify-content-center align-items-center">
        <Paginacion
            postsPerPage={pageMd}
            totalPosts={productos.length}
            paginate={paginateMd}
            currentPage={currentPageMd}
          />
        </div>
      </Row>
      <Row className=" g-4 d-flex d-md-none d-lg-none mt-3 ">
        {currentPostsSm.map((p, index) => (
          <Col key={index} className="d-flex flex-wrap m-lg-3" xs={6} sm={5}>
            <ProductCard p={p} />
          </Col>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <Paginacion
            postsPerPage={pageSm}
            totalPosts={productos.length}
            paginate={paginateSm}
            currentPage={currentPageSm}
          />
        </div>
      </Row>
    </>
  );
};

export default ListProducts;
