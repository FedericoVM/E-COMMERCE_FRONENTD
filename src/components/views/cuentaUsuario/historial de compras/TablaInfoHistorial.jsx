import { Table } from "react-bootstrap"
import "./csshistorialproductos/cssTablaInfoHistorial.css"
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook"
import { Link } from "react-router-dom"

const TablaInfoHistorial = ({productos}) =>{
    
    const {formatPrecio} = ProductosHook()
    
    return (
        <div>
            <Table bordered style={{ tableLayout: 'fixed', width: '100%' }} className="m-0 tabla-info-historial">
                <thead>
                    <tr>
                        <th colSpan={2}></th>
                        <th colSpan={5} className="text-center fw-semibold">Producto</th>
                        <th colSpan={3} className="text-center fw-semibold">Total</th>
                        <th colSpan={2} className="text-center fw-semibold">Cant.</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((produ, index) => (
                        <tr key={index} className="">
                            <td className="px-0 text-center" colSpan={2}><img className="imagen-tabla-info-historial" src={produ.imagen}/></td>
                            <td colSpan={5} className="align-self-center text-center td-producto-nombre-info-historial"><Link className="texto-hover-tabla-info-historial" to={`/producto/${produ.producto_id}`}>{produ.nombre}</Link></td>
                            <td colSpan={3} className="align-content-center px-0 text-center">{formatPrecio(produ.precio)}</td>
                            <td colSpan={2} className="align-content-center text-center">{produ.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TablaInfoHistorial