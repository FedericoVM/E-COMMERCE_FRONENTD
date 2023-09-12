import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import ListProducts from "./listProducts/ListProducts";
import Paginacion from "../paginacion/Paginacion";


const Home = ({productos}) => {

  return (
    <>
      <CarouselHome />
      <div >
        <Row className=" mx-0 d-flex">
          <Col  lg={10}>
             {/* <ListProducts productos={productos} /> */}
            {productos.length > 0 ? <Paginacion lista = {productos} card = {"card"} /> : <h1>Hola</h1>}  {/* <Paginacion lista = {productos}/> */}
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