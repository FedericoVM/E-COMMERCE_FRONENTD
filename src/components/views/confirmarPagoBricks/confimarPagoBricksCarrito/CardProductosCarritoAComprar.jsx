import "./cardProductosCarritoAComprar.css"
import PrecioCardCarritoCompra from "./precio componentes card compra carrito/PrecioCardCarritoCompra"
import PrecioDescCardCarritoCompra from "./precio componentes card compra carrito/PrecioDescCardCarritoCompra"

const CardProductosCarritoAComprar = ({producto}) =>{
    
    return (
        <div className="d-flex rounded col-12 justify-content-center my-2 flex-row align-items-center contenedor-carrito-a-comprar">
            <div>
            <img className="imagen-carrito-a-comprar img-thumbnail align-self-center col-3" src={producto.imagen}/>
            {producto.destacado && <p className="m-0 text-center descuent-card-compra">{producto.descuento}%OFF</p>}
            </div>
            <div className="col-9 my-1">
                <p className="nombre-card-compra-carrito my-2 text-center">{producto.nombre}</p>
                <div className="d-flex contenedor-caracteristicas-card-compra flex-row col-12 justify-content-evenly">
                <div  className="d-flex flex-row justify-content-evenly col-8 cantidad-marca-card-compra">   
                    <div>
                        <p className="m-0 text-center">Cantidad:</p>
                        <p className="m-0 text-center">{producto.cantidad}</p>
                    </div>
                    <div>
                        <p className="m-0 text-center">Marca:</p>
                        <p className="m-0 text-center">{producto.marca}</p>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse justify-content-evenly precio-card-compra">
                    <div className="text-center">
                        <p className="m-0 text-center">Precio:</p>
                        {producto.destacado ? <PrecioDescCardCarritoCompra producto={producto}/> : <PrecioCardCarritoCompra producto={producto}/>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardProductosCarritoAComprar