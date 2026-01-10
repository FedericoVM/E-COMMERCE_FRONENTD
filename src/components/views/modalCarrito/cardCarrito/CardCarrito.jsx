import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import "./CardCarrito.css"
import { Link } from "react-router-dom";
import PreciosDelCarrito from "../precios a mostrar carrito/PreciosDelCarrito";
import productoNoDisponible from "../../../../assets/img/carrito-vacio/productoNoDisponible.jpg"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";

const CardCarrito = ({ producto }) => {
    const [anularBtnSumar, setAnularBtnSumar] = useState(false);
    const [anularBtnRestar, setAnularBtnRestar] = useState(false);

    const {actualizarCarrito, eliminarProductoDelCarrito, handleCloseModalCarrito} = UserHook()
    const {bloquearCarritoBotones} = ProductosHook()

    const desabilitarBotones = () => {
        if (producto.cantidad >= producto.stock) setAnularBtnSumar(true) 
        if (producto.cantidad <= 1) setAnularBtnRestar(true)
    }

    const habilitarBotones = () => {
        if (producto.cantidad < producto.stock) setAnularBtnSumar(false)
        if (producto.cantidad > 1) setAnularBtnRestar(false)
    }

    useEffect(()=> {
        desabilitarBotones();
        habilitarBotones();
    },[producto])

    return (
        <>
            <ListGroup.Item
                as="li"
                className={producto.stock > 0 ? "contenedor-carrito rounded align-items-center d-flex justify-md-content-start col-12": "rounded sin-stock align-items-center d-flex justify-md-content-start col-12"}
            >
                <Link to={`/producto/${producto.idProducto}`} onClick={()=>{handleCloseModalCarrito(false)}} className="flex-shrink-0 contenedor-imagen-carrito border justify-content-center align-items-center col-sm-4">
                    {producto.destacado && <p className="label-destacado m-0 rounded">Destacado</p>}
                    <img src={producto.imagen !== "No Disponible"? producto.imagen : productoNoDisponible} className={producto.stock > 0 ? "imagen-card-carrito rounded container":"imagen-card-carrito-sin-stock container rounded"} alt="..." />
                </Link>
                <div className="contenedor-info-producto d-flex flex-column justify-content-center align-items-evenly col-12 m-0 text-center col-sm-8 rounded">
                    <Link to={`/producto/${producto.idProducto}`} onClick={()=>{handleCloseModalCarrito(false)}} className="text-decoration-none text-black">
                    <span className="producto-nombre">{producto.nombre}</span>
                    </Link>
                    <PreciosDelCarrito producto={producto}/>
                    <div className={producto.stock > 0 ? "d-flex justify-content-evenly" : "d-flex justify-content-evenly align-items-end mt-4"}>
                        {producto.stock > 0 ? 
                        <div className="d-flex justify-content-center flex-column contenedor-cantidad">
                        <p className="cantidad-label">Cantidad</p>
                        <div className="">
                            <Button
                                variant="primary"
                                size="sm"
                                className="m-0 boton-restar-carrito"
                                name="restar"
                                disabled={anularBtnRestar === true}
                                onClick={(e) => {
                                    actualizarCarrito(e, producto.id, (producto.cantidad - 1), bloquearCarritoBotones);
                                }}
                            >
                                -
                            </Button>
                            <span className="mx-2">{producto.cantidad}</span>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="m-0 boton-sumar-carrito"
                                name="sumar"
                                disabled={anularBtnSumar === true}
                                onClick={(e) => {
                                    actualizarCarrito(e, producto.id, (producto.cantidad + 1), bloquearCarritoBotones);
                                }}
                            >
                                +
                            </Button>
                        </div>
                        </div>
                        : <p className="fs-5 m-0">{producto.stock === "No Disponible" ? "No Disponible" : "Sin Stock"}</p>}
                        <div className="align-self-end">
                            <Button
                                variant="danger"
                                size="sm"
                                className="boton-eliminar-producto-carrito"
                                onClick={() => {
                                    eliminarProductoDelCarrito(producto.id, bloquearCarritoBotones);
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
