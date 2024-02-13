import {useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

import CardCarrito from "./cardCarrito/CardCarrito";


const ModalCarrito = ({ productosCarrito, listaCarrito, token }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="link" onClick={handleShow}>
                Carrito
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
                        {productosCarrito.length > 0 ? (
                            productosCarrito.map((producto, index) => producto===null ? <p>Borrado</p> : (
                               <CardCarrito producto={producto} token={token} listaCarrito={listaCarrito} key={index} />
                            ))
                        ) : (
                            <ListGroup.Item as="li">No hay productos</ListGroup.Item>
                        )}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">Comprar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCarrito;
