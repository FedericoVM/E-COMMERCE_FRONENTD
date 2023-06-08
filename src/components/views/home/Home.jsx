import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import ListProducts from "./listProducts/ListProducts";
import Pagination from "../Destacados/Pagination";
import ProductCard from "./productCard/ProductCard";
import instance from "../../../axios/instance"

const Home = ({productos}) => {

 
  return (
    <>
      <CarouselHome />
      <div >
        <Row className=" mx-0 d-flex">
          <Col  lg={10}>
             <ListProducts productos={productos} />
          </Col>
          <Col lg={2} className="d-none bg-danger d-lg-inline publicidad">
            <img
              className="publicidad-img img-fluid h-100"
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