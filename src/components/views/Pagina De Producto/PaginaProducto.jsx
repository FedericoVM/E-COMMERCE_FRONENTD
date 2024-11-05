import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado";
import ContenidoPaginaProducto from "./ContenidoPaginaProducto";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";

const PaginaProducto = ( ) =>{
    const [productoAMostrar, setProductoAMostrar] = useState("");

    const {productosHome} = ProductosHook()

    const {id} = useParams()

    const encontrarProducto = (id, products) => {
        const productoEncontrado =  products.find((e)=>{
        return e._id === id
    })
    setProductoAMostrar(productoEncontrado)
    }
    
    useEffect(()=>{
        encontrarProducto(id, productosHome)
    }, [productosHome, id])

    return (
        <div>
            {productoAMostrar ? <ContenidoPaginaProducto productoAMostrar= {productoAMostrar}/> : <ProductoNoEncontrado/>}
        </div>
    )
}

export default PaginaProducto