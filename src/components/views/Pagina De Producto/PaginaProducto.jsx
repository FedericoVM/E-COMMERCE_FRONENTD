import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoNoEncontrado from "./ProductoNoEncontrado";
import ContenidoPaginaProducto from "./ContenidoPaginaProducto";

const PaginaProducto = ({productos}) =>{
    const [productoAMostrar, setProductoAMostrar] = useState("");

    const {id} = useParams()

    const encontrarProducto = (id, products) => {
        const productoEncontrado =  products.find((e)=>{
        return e._id === id
    })
    setProductoAMostrar(productoEncontrado)
    }
    
    useEffect(()=>{
        encontrarProducto(id, productos)
    }, [productos])

    return (
        <div>
            {productoAMostrar ? <ContenidoPaginaProducto productoAMostrar= {productoAMostrar}/> : <ProductoNoEncontrado/>}
        </div>
    )
}

export default PaginaProducto