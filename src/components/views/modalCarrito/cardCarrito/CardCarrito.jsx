import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const CardCarrito = ({ producto }) => {
    const [anularBtnSumar, setAnularBtnSumar] = useState(false);
    const [anularBtnRestar, setAnularBtnRestar] = useState(false);

    const {actualizarCarrito, eliminarProductoDelCarrito} = UserHook()
    const {formatPrecio} = ProductosHook()

    const desabilitarBotones = () => {
        if(producto.cantidad === producto.stock) {
            setAnularBtnSumar(true)
        } else if (producto.cantidad === 1) {
            setAnularBtnRestar(true)
        }
    }

    const habilitarBotones = () => {
        if(producto.cantidad !== producto.stock){
            setAnularBtnSumar(false)
        } 
        if (producto.cantidad !== 1) {
            setAnularBtnRestar(false)
        }
    }

    useEffect(()=> {
        desabilitarBotones();
        habilitarBotones()
    },[producto])

    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-start "
                style={{ height: "10rem" }}
            >
                <div className="flex-shrink-0">
                    <img src={producto.imagen} className="h-100" alt="..." />
                </div>
                <div className="flex-grow-1 ms-3 text-center ">
                    <span>{producto.nombre}</span>
                    <p className="mb-1">Precio: {formatPrecio(producto.precio * producto.cantidad)}</p>
                    <p>Cantidad : {producto.cantidad}</p>

                    <div className="d-flex justify-content-around align-items-center ">
                        <div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="m-0"
                                name="restar"
                                disabled={anularBtnRestar === true}
                                onClick={(e) => {
                                    actualizarCarrito(e, producto.id, producto.cantidad, producto);
                                }}
                            >
                                -
                            </Button>
                            <span className="mx-2">{producto.cantidad}</span>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="m-0"
                                name="sumar"
                                disabled={anularBtnSumar === true}
                                onClick={(e) => {
                                    actualizarCarrito(e, producto.id, producto.cantidad, producto);
                                }}
                            >
                                +
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="danger"
                                size="sm"
                                className="my-2"
                                onClick={() => {
                                    eliminarProductoDelCarrito(producto.id);
                                }}
                            >
                                Quitar
                            </Button>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        </>
    );
};

export default CardCarrito;
