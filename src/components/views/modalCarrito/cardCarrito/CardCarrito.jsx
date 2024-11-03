import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import "./CardCarrito.css"
import { Link } from "react-router-dom";

const CardCarrito = ({ producto }) => {
    const [anularBtnSumar, setAnularBtnSumar] = useState(false);
    const [anularBtnRestar, setAnularBtnRestar] = useState(false);

    const {actualizarCarrito, eliminarProductoDelCarrito, handleCloseModalCarrito} = UserHook()
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
                className={producto.stock > 0 ? "contenedor-carrito align-items-center d-flex justify-md-content-start col-12": "sin-stock align-items-center d-flex justify-md-content-start col-12"}
            >
                <Link to={`/producto/${producto.idProducto}`} onClick={()=>{handleCloseModalCarrito(false)}} className="flex-shrink-0 contenedor-imagen-carrito justify-content-center align-items-center col-sm-4">
                    <img src={producto.imagen} className={producto.stock > 0 ? "imagen-card-carrito rounded container":"imagen-card-carrito-sin-stock container rounded"} alt="..." />
                </Link>
                <div className="contenedor-info-producto d-flex flex-column justofy-content-center align-items-evenly col-12 m-0 text-center col-sm-8">
                    <Link to={`/producto/${producto.idProducto}`} onClick={()=>{handleCloseModalCarrito(false)}} className="text-decoration-none text-black">
                    <span className="producto-nombre">{producto.nombre}</span>
                    </Link>
                    <p className="mb-1">Precio: {formatPrecio(producto.precio * producto.cantidad)}</p>
                    <div className={producto.stock > 0 ? "d-flex justify-content-evenly align-items-end" : "d-flex justify-content-evenly align-items-end mt-4"}>
                        {producto.stock > 0 ? 
                        <div className="d-flex justify-content-center flex-column contenedor-cantidad">
                        <p className="cantidad-label">Cantidad</p>
                        <div className="">
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
                        </div>
                        : <p className="fs-5 m-0">Sin Stock</p>}
                        <div>
                            <Button
                                variant="danger"
                                size="sm"
                                className="boton-eliminar-producto-carrito"
                                onClick={() => {
                                    eliminarProductoDelCarrito(producto.id);
                                }}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        </>
    );
};

export default CardCarrito;
