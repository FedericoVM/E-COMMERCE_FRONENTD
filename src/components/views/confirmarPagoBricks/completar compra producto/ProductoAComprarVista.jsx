import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import PrecioConDescuentoCard from "../../home/productCard/PrecioConDescuentoCard"
import PrecioSinDescuentoCard from "../../home/productCard/PrecioSinDescuentoCard"
import "./productoAComprarVista.css"

const ProductoAComprarVista = () =>{

    const {productoAComprar} = ProductosHook()

    return (
        <div className="col-11 my-3 my-md-0 col-md-5 d-flex align-items-center flex-column">
            <img className="imagen-de-producto-a-comprar img-thumbnail" src={productoAComprar.imagen}/>
            <h4 className="my-3 producto-a-comprar-nombre">{productoAComprar.nombre}</h4>
            <div className="d-flex col-12 justify-content-evenly">
                <div className="text-center">
                    <p className="m-0 titulo-descripcion-producto-a-comprar">Marca:</p>
                    <p className="producto-a-comprar-marca">{productoAComprar.marca}</p>
                </div>
                <div className="text-center">
                    <p className="m-0 titulo-descripcion-producto-a-comprar">Categoria:</p>
                    <p className="producto-a-comprar-marca">{productoAComprar.categoria}</p>
                </div>
            </div>
            <div className="align-self-center contenedor-precios-producto-a-comprar mb-3">
            {productoAComprar.destacado ? <PrecioConDescuentoCard producto={productoAComprar}/>: <PrecioSinDescuentoCard producto={productoAComprar}/>}
            </div>
            <section className="align-self-star col-12 py-2 px-3 seccion-descripcion-producto-a-comprar rounded">
                <p className="titulo-descripcion-producto-a-comprar">Descripcion:</p>
                <p className="descripcion-producto-a-comprar m-0">{productoAComprar.descripcion}</p>
            </section>
        </div>
    )
}

export default ProductoAComprarVista