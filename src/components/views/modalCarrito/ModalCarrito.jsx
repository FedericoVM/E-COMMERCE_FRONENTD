import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import CardCarrito from "./cardCarrito/CardCarrito";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { useEffect } from "react";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { FormLabel } from "react-bootstrap";
import { toast } from "sonner";
import CarritoVacio from "./carritoVacio/CarritoVacio";
import instance from "../../../axios/instance";
import ModalEsperaPagoBack from "../Modal espera pago/ModalEsperaPagoBack";
import "./modalCarrito.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ModalCarrito = () => {
  
  const navigate = useNavigate();

  const {
    usuarioCarrito,
    botonBloquear,
    showModalCarrito,
    setShowModalCarrito,
    handleCloseModalCarrito,
    usuarioInfo,
    tokenUser,
    brilloModalCarrito,
    costoTotalCarrito,
    setCostoTotalCarrito
  } = UserHook();
  const {
    formatPrecio,
    setErrorMercado,
  } = ProductosHook();

  const handleClose = () => setShowModalCarrito(false);

  const sumarTotalCarrito = (productosArray) => {
    let total = 0;
    if (productosArray) {
      productosArray.forEach((element) => {

        if(!element) {
          return total += 0
        }
        
        if(element.stock === 0) {
          return total += 0
        }

        if (element.destacado === true) {
          if (element.descuento < 10) {
            total +=
              (element.precio -
                element.precio * Number(`0.0${element.descuento}`)) *
              element.cantidad;
          } else {
            total +=
              (element.precio -
                element.precio * Number(`0.${element.descuento}`)) *
              element.cantidad;
          }
        } else {
          total += element.precio * element.cantidad;
        }
      });
    }

    setCostoTotalCarrito(total);
  };

  const comprarProductosCarrito = async (setHandleShow) => {
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    const usuarioCarritoFront = {
      email: usuarioInfo.email,
      carritoFront: usuarioCarrito
    };

    try {
      const pagoCarrito = await instance.post(
        "/mercadoPago/crear-carrito-payment-order",
        usuarioCarritoFront,
        config
      );
      
      if (pagoCarrito) {
        navigate('/comprar-carrito');
        setHandleShow()
      }
    } catch (error) {
      setErrorMercado(error.response);
      console.log(error);
      
      toast.warning("Algo Paso.");
    }
  };

  useEffect(() => {
    if (usuarioCarrito.length === 0 ) {
      return setCostoTotalCarrito(null);
    }
    sumarTotalCarrito(usuarioCarrito);
  }, [usuarioCarrito]);

  return (
    <>
      <Button
        variant="link"
        className="p-0 total-text"
        onClick={() => {
          handleCloseModalCarrito(true);
        }}
      >
        <FaShoppingCart className="icono-carrito-modal" />
      </Button>
      <Modal
        show={showModalCarrito}
        onHide={handleClose}
        fullscreen={"md-down"}
        backdrop="static"
        keyboard={false}
        className={brilloModalCarrito && "modal-body-carrito"}
      >
        <Modal.Header closeButton className="header-carrito">
          <Modal.Title className="text-white">Mi carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal overflow-auto">
          <ListGroup as="ol" className="gap-2">
            {usuarioCarrito.length > 0 ? (
              usuarioCarrito.map((producto) =>
                  <CardCarrito producto={producto} key={producto.idProducto} />
              )
            ) : (
              <CarritoVacio />
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className="d-flex col-12 col-sm-12 align-self-center align-items-center flex-row footer-carrito-modal justify-content-center justify-content-md-around">
          <div className="d-flex p-0 m-0 footer-total-tex-carrito-modal flex-row align-items-center justify-content-evenly container col-6 col-sm-4 col-md-7">
            <FormLabel className="total-text-label m-0">Total:</FormLabel>
            <FormLabel className="total-text m-0">
              {costoTotalCarrito !== 0 ? `${formatPrecio(costoTotalCarrito)}` : "0"}
            </FormLabel>
          </div>
          <div className="d-flex col-6 col-sm-4 col-md-5 footer-botones-carrito-modal m-0 p-0 flex-row justify-content-evenly">
            <Button className="boton-cerrar-carrito" onClick={handleClose}>
              Cerrar
            </Button>
            <ModalEsperaPagoBack comprarProducto={comprarProductosCarrito} classPropiedad={"boton-comprar-carrito"} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCarrito;
