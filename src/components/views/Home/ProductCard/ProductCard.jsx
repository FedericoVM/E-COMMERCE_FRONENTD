import React from "react";
import { Button, Card, Col, Nav, NavLink, Row } from "react-bootstrap";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ p}) => {
  console.log(p)
  return (
    <Card  className="card shadow-lg border m-sx-3 ">
      <div>
        <Card.Img
          className="card-img border-bottom imagenCard"
          variant="top"
          src={p.imagen}
        />
        <Card.Title className="text-white title-precio rounded">
          ${p.precio}
        </Card.Title>
        <Button variant="primary" className="boton-favorito">
          <BsSuitHeartFill />
        </Button>
      </div>
      <Card.Body className="d-flex">
        <div>
          <Link to="/product" className="text-decoration-none">
            <div className="d-flex justify-content-between text-center  h-100">
              <Card.Title className="text-dark ">asd</Card.Title>
            </div>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;