import { useEffect, useState } from "react"
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook"
import { Col, Row } from "react-bootstrap"
import Paginacion from "../paginacion/Paginacion"
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado"
import { useSearchParams } from "react-router-dom"
import ApiQueryHook from "../../../queryApi/ApiQueryHook"

const VentanaDeBusqueda = ({productos}) => {

    const [productosEncontrados, setProductosEncontrados] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const {buscarProductos} = ProductosHook()

    const valorProductoABuscar = searchParams.get("search") ?? undefined

    const {data, isLoading, error} = ApiQueryHook({search: valorProductoABuscar})

    console.log(data);
    

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
            { !isLoading ? <Paginacion lista={productosEncontrados} card={"card"}/> : <ProductoNoEncontrado/>}
          </Col>
        </Row>
        </div>
    )
}

export default VentanaDeBusqueda