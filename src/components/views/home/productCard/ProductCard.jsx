import React from "react";
import { Button, Card, Col, Nav, NavLink, Row } from "react-bootstrap";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ p}) => {
  return (
    <Card  className="card shadow-lg border m-sx-3 ">
      <div>
        <Card.Img
          className="card-img border-bottom img-fluid"
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
      <Card.Body className="h-100 d-flex flex-column ">
        <div>
          <Link to="/product" className="text-decoration-none">
            <div className="d-flex justify-content-between container p-0 text-center  h-100">
              <Card.Title className="text-dark ">{p.titulo}</Card.Title>
            </div>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;