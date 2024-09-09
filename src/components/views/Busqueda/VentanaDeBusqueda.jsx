import { useEffect, useState } from "react"
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"
import { Col, Row } from "react-bootstrap"
import Paginacion from "../paginacion/Paginacion"
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado"

const VentanaDeBusqueda = () => {

    const [productosEncontrados, setProductosEncontrados] = useState([])

    const {buscarProductos, productosHome} = ProductosHook()

    const filtrarProductosBusqueda = (arrayProductos) => {
        let productoEncontrado = arrayProductos.filter((producto)=> {
            return (producto.nombre.toLowerCase().includes(buscarProductos.toLowerCase())                )
        });
        setProductosEncontrados(productoEncontrado)
    }

    useEffect(()=> {
        if (buscarProductos && buscarProductos.length > 2) {
            filtrarProductosBusqueda(productosHome)
        }
    },[buscarProductos])

    return (
        <div>
            <Row className=" mx-0 d-flex">
          <Col lg={12}>
            {productosEncontrados.length > 0 ? <Paginacion lista={productosEncontrados} card={"card"}/> : <ProductoNoEncontrado/>}
          </Col>
        </Row>
        </div>
    )
}

export default VentanaDeBusqueda