import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import instance from "../../../../axios/instance";
import { useState } from "react";

const CardCarrito = ({ producto, token, listaCarrito }) => {
    const [anularBtnSumar, setAnularBtnSumar] = useState(false);
    const [anularBtnRestar, setAnularBtnRestar] = useState(false);

    const eliminarCarrito = async (id) => {
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };

        try {
            let resultado = await instance.delete(`/carrito/${id}`, config);
            console.log(resultado.data.mensaje);
            listaCarrito(token);
        } catch (error) {
            console.log(error);
        }
    };

    const cambiarCantidad = async (e, id, cantidad) => {
        let operacion = e.target.name;
        let cant;


        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };




        cant = {
            cantidad: operacion === "sumar" ? (cantidad += 1) : (cantidad -= 1)
        };


        if (operacion === "sumar") {

            if (cant.cantidad === producto.stock) {
                setAnularBtnSumar(true);
                return console.log("No puede agregar mas cantidad. LLego al limite de stock del producto");
            } else {
                setAnularBtnRestar(false);
            }
        } 
        else {
            if (cantidad === 0) {
                setAnularBtnRestar(true);
                return console.log("La cantidad minima es 1");
            } else {
                setAnularBtnSumar(false);
            }

        }





        try {
            let resultado = await instance.put(`/carrito/${id}`, cant, config);
            listaCarrito(token);
            console.log(resultado.data.mensaje);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-start "
                style={{ height: "10rem" }}
            >
                <div className="flex-shrink-0 ">
                    <img src={producto.imagen} className="h-100" alt="..." />
                </div>
                <div className="flex-grow-1 ms-3 text-center ">
                    <span>{producto.nombre}</span>
                    <p className="mb-1">Precio: $ {producto.precio}</p>
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
                                    cambiarCantidad(e, producto.id, producto.cantidad);
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
                                    cambiarCantidad(e, producto.id, producto.cantidad);
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
                                    eliminarCarrito(producto.id);
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
