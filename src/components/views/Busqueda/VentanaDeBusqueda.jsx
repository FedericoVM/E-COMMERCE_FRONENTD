import { useEffect, useState } from "react"
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"
import { Col, Row } from "react-bootstrap"
import Paginacion from "../paginacion/Paginacion"

const VentanaDeBusqueda = ({productos}) => {

    const [productosEncontrados, setProductosEncontrados] = useState([])

    const {buscarProductos} = ProductosHook()

    const filtrarProductosBusqueda = (arrayProductos) => {
        let productoEncontrado = arrayProductos.filter((producto)=> {
            return (producto.nombre.toLowerCase().includes(buscarProductos.toLowerCase()) || producto.categoria.toLowerCase().includes(buscarProductos.toLowerCase()) || producto.marca.toLowerCase().includes(buscarProductos.toLowerCase()))
        });
        setProductosEncontrados(productoEncontrado)
    }

    useEffect(()=> {
        if (buscarProductos && buscarProductos.length > 2) {
            filtrarProductosBusqueda(productos)
        }
    },[buscarProductos])

    return (
        <div>
            <Row className=" mx-0 d-flex">
          <Col lg={12}>
            {productosEncontrados.length > 0 ? <Paginacion lista={productosEncontrados} card={"card"}/> : <h1>Sin productos...</h1>}
          </Col>
        </Row>
        </div>
    )
}

export default VentanaDeBusqueda