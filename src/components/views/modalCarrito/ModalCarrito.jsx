import {useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import CardCarrito from "./cardCarrito/CardCarrito";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { useEffect } from "react";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { FormLabel } from "react-bootstrap";
import { toast } from "sonner";
import "./ModalCarrito.css"
import CarritoVacio from "./carritoVacio/CarritoVacio";
import instance from "../../../axios/instance";
import ModalEsperaPagoBack from "../Modal espera pago/ModalEsperaPagoBack";

const ModalCarrito = ( ) => {
    
    const [precioTotal, setPrecioTotal] = useState(null)

    const {usuarioCarrito, showModalCarrito,setShowModalCarrito, handleCloseModalCarrito, usuarioInfo, tokenUser} = UserHook()
    const {productosHome, filtrarCarritoAMostrarProducto, productosCarritoAMostrar, formatPrecio, setErrorMercado} = ProductosHook()

    const handleClose = () => setShowModalCarrito(false);

    const sumarTotalCarrito = (productosArray) => {
        let total = 0;
if (productosArray) {
        productosArray.forEach(element => {
            total += element.precio * element.cantidad         
        });
    }
    setPrecioTotal(total)
    }

    const comprarProductosCarrito = async () => {

        const config = {
            headers: {
              authorization: `Bearer ${tokenUser}`
            }
          }

        const usuarioCarrito = {
            email: usuarioInfo.email
        }

        try {
            const pagoCarrito = await instance.post('/mercadoPago/paymentCarrito', usuarioCarrito, config);
            if (pagoCarrito) {
                window.location.href = `${pagoCarrito.data.redirecttUrl}`
              }
        } catch (error) {
            console.log(error);
            setErrorMercado(error.response.data.message)
            toast.warning('Algo Paso.')
        }
    }

    useEffect(()=>{
    if (usuarioCarrito) {
        filtrarCarritoAMostrarProducto(usuarioCarrito, productosHome)
    }
    if (usuarioCarrito === null) {
        setPrecioTotal(null)
    }
    },[usuarioCarrito])

    useEffect(()=> {
        if(productosCarritoAMostrar){
            sumarTotalCarrito(productosCarritoAMostrar)
        }
    },[productosCarritoAMostrar])

    return (
        <>
            <Button variant="link" onClick={()=>{if(tokenUser){handleCloseModalCarrito(true)}}}>
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
                    <ModalEsperaPagoBack comprarProducto={comprarProductosCarrito} />
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCarrito;
