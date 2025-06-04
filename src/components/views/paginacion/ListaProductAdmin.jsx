import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginacionControl from './PaginacionControl';
import instance from '../../../axios/instance';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { ProductosHook } from '../../../context/Contexto de Productos/ProductosHook';
import ModalEliminar from '../Modal para confirmar/ModalEliminar';
import {toast} from "sonner"
import ComponentePreciosTablaAdmin from './ComponentePreciosTablaAdmin';

const ListaProductAdmin = ({ adminLista, paginate, currentPage, totalPosts, page, arrayBuscar }) => {

    const {tokenUser} = UserHook()
    const {obtenerProductos, formatPrecio} = ProductosHook()

    const eliminarProducto = async (codigo) => {
        const config = {
            headers: {
                Authorization: `Bearer ${tokenUser}`,
            },
        };

        try {
            const resp = await instance.delete(`/productos/${codigo}`, config);
            toast.success(resp.data.msg)
            obtenerProductos()
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    };

    return (
        <div className="my-3 col-11">
            <div className='overflow-auto'>
            <Table bordered hover className="text-center" style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                    <tr className='cabecera-tabla-productos-admin'>
                        <th className='th-codigo'>Imagen</th>
                        <th className='th-nombre'>Nombre</th>
                        <th className='th-precio'>Precio</th>
                        <th className='th-categoria'>Categoria</th>
                        <th className='th-marca'>Marca</th>
                        <th className='th-stock'>Stock</th>
                        <th className='th-destacado'>Destacado</th>
                        <th className='th-acciones'>Acciones</th>
                    </tr>
                </thead>
                <tbody className='body-tabla-productos-admin'>
                    {arrayBuscar !== null ? adminLista.map((producto, index) => (
                        <tr key={index} className=''>
                            <td className='td-tabla-image'><img className='td-tabla-imagen' src={producto.imagen}/></td>
                            <td className='td-tabla-nombre'>{producto.nombre}</td>
                            <td className='td-tabla-precio'>{producto.destacado ? <ComponentePreciosTablaAdmin producto={producto}/>: formatPrecio(producto.precio)}</td>
                            <td className='td-tabla-categoria'>{producto.categoria}</td>
                            <td className='td-tabla-marca'>{producto.marca}</td>
                            <td className='td-tabla-stock'>{producto.stock}</td>
                            <td className='td-tabla-destacado'>{producto.destacado ? "Si" : "No"}</td>
                            <td className='td-tabla-acciones'>
                                <div className="d-flex justify-content-evenly">
                                    <ModalEliminar eliminar={eliminarProducto} id={producto._id} objetivo={"producto"}/>
                                    <Link
                                        to={`/editar-producto/${producto._id}`}
                                        className="btn boton-editar-producto"
                                    >
                                        Editar
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )) :
                        arrayBuscar.map((producto, index) => (
                            <tr key={index}>
                                <td><img src={producto.imagen}/></td>
                                <td>{producto.nombre}</td>
                                <td>{formatPrecio(producto.precio)}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.destacado ? "Si" : "No"}</td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <ModalEliminar eliminar={eliminarProducto} id={producto._id} objetivo={"producto"}/>
                                        <Link
                                            to={`/editar-producto/${producto._id}`}
                                            className="btn mx-1"
                                        >
                                            Editar
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
            <div>
                <PaginacionControl postsPerPage={page-5} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
            </div>
        </div>
    )
}

export default ListaProductAdmin