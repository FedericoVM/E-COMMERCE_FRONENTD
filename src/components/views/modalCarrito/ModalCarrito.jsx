import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import CardCarrito from "./cardCarrito/CardCarrito";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { useEffect } from "react";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { FormLabel } from "react-bootstrap";
import "./modalCarrito.css"

const ModalCarrito = () => {
  const [precioTotal, setPrecioTotal] = useState(null);

  const { usuarioCarrito, usuarioEnLinea } = UserHook();
  const {
    productosHome,
    filtrarCarritoAMostrarProducto,
    productosCarritoAMostrar,
    formatPrecio,
  } = ProductosHook();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (usuarioEnLinea === false) {
      return console.log("inicie sesion");
    }
    setShow(true);
  };

  const usuarioInLine = (usuario) => {
    if (usuario === false) {
      return console.log("Porfavor inicie sesion");
    }
  };

  const sumarTotalCarrito = (productosArray) => {
    let total = 0;
    if (productosArray) {
      productosArray.forEach((element) => {
        total += element.precio * element.cantidad;
      });
    }
    setPrecioTotal(total);
  };

  useEffect(() => {
    if (usuarioCarrito) {
      filtrarCarritoAMostrarProducto(usuarioCarrito, productosHome);
    }
    if (usuarioCarrito === null) {
      setPrecioTotal(null);
    }
  }, [usuarioCarrito]);

  useEffect(() => {
    if (productosCarritoAMostrar) {
      sumarTotalCarrito(productosCarritoAMostrar);
    }
  }, [productosCarritoAMostrar]);

  return (
    <>
      <Button variant="link"  className="p-0" size="lg" onClick={handleShow}>
        <FaShoppingCart/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-Light">Mi carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol">
            {productosCarritoAMostrar ? (
              productosCarritoAMostrar.map((producto, index) =>
                producto === null ? (
                  <p>Borrado</p>
                ) : (
                  <CardCarrito producto={producto} key={index} />
                )
              )
            ) : (
              <ListGroup.Item as="li">No hay productos</ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center justify-content-evenly container col-6">
            <FormLabel className="fs-5">Total:</FormLabel>
            <FormLabel className="fs-4">
              {precioTotal !== 0 ? `${formatPrecio(precioTotal)}` : "0"}
            </FormLabel>
          </div>
          <div className="d-flex col-5 flex-row justify-content-evenly">
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary">Comprar</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCarrito;
