import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import ListProducts from "./listProducts/ListProducts";
import Pagination from "./pagination/Pagination";
import ProductCard from "./productCard/ProductCard";

const Home = ({products}) => {


  return (
    <>
      <CarouselHome />
      <div className="vh-100">
        <Row className=" mx-0">
          <div className="linea p-4"></div>
          <Col className=" " lg={10}>
             <ListProducts products={products} />
          </Col>
          <Col lg={2} className="d-none d-lg-inline publicidad  vh-100  ">
            <img
              className="publicidad-img w-100 h-100"
              src={publicidad}
              alt="publicidad_intel"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;