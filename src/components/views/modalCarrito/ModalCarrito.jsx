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
<<<<<<< HEAD
import "./modalCarrito.css"
=======
import { toast } from "sonner";
import "./ModalCarrito.css"
import CarritoVacio from "./carritoVacio/CarritoVacio";
>>>>>>> develop

const ModalCarrito = () => {
  const [precioTotal, setPrecioTotal] = useState(null);

<<<<<<< HEAD
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
=======
    const {usuarioCarrito, showModalCarrito,setShowModalCarrito, handleCloseModalCarrito} = UserHook()
    const {productosHome, filtrarCarritoAMostrarProducto, productosCarritoAMostrar, formatPrecio} = ProductosHook()

    const handleClose = () => setShowModalCarrito(false);
>>>>>>> develop

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

<<<<<<< HEAD
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
=======
    return (
        <>
            <Button variant="link" onClick={()=>{handleCloseModalCarrito(true)}}>
                Carrito
            </Button>
            <Modal
                show={showModalCarrito}
                onHide={handleClose}
                fullscreen={"md-down"}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-white">Mi carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body-modal overflow-auto">
                    <ListGroup as="ol">
                        {productosCarritoAMostrar.length > 0 ? (
                            productosCarritoAMostrar.map((producto, index) => producto===null ? <p>Borrado</p> : (
                               <CardCarrito producto={producto} key={index} />
                            ))
                        ) : (
                            <CarritoVacio/>
                        )}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer className="d-flex flex-column bg-primary bg-opacity-25 flex-sm-row-reverse justify-content-between">
                    <div className="d-flex m-0 p-0 flex-row align-items-center justify-content-evenly container col-6">
                    <FormLabel className="total-text">Total:</FormLabel>
                    <FormLabel className="total-text">{precioTotal !== 0 ? `${formatPrecio(precioTotal)}` : "0"}</FormLabel>
                    </div>
                    <div className="d-flex col-12 col-sm-5 m-0 p-0 flex-row justify-content-evenly">
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">Comprar</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
>>>>>>> develop
};

export default ModalCarrito;
