import { Spinner } from "react-bootstrap";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import Table from 'react-bootstrap/Table';

const ProductosSinStock = () =>{

    const {errorMercado, productosHome} = ProductosHook()

    const productosSinStock = errorMercado.data.sinStock.map((element) =>{
        let mapearConProductosHome = productosHome.find((e)=>{
            return e._id === element
        })
        return mapearConProductosHome
    })

    console.log(productosSinStock[0]);
    

    return (
        <>
        <p className="titulo-productos-sin-stock">Los siguientes productos no tienen stock</p>
        <Table striped bordered hover size="sm">
      <tbody  className="tabla-body-productos-sin-stock">
        {productosSinStock.length > 0 ? productosSinStock.map((produc, index)=>(
            <tr key={index} className="border border-dark border-opacity-25">
                <td className="col-4">
                    <img className="imagen-productos-sin-stock align-self-center rounded" src={produc.imagen}/>
                </td>
                <td className="col-8 nombre-productos-sin-stock text-center align-self-center">
                    {produc.nombre}
                </td>
            </tr>
        )):<Spinner/>}
      </tbody>
    </Table>
        </>
    )
}

export default ProductosSinStock