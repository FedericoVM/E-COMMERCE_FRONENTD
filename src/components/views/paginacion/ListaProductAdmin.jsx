import { Button } from 'react-bootstrap';
import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginacionControl from './PaginacionControl';

const ListaProductAdmin = ({currentPosts,paginate,currentPage,totalPosts,page}) => {

    return (
        <div className="my-3 contenedor-tabla-productos">
            <Table bordered hover className="text-center tabla-de-productos">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Stock</th>
                        <th>Destacado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.codigo}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.marca}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.destacado ? "Si" : "No"}</td>
                            <td>
                                <div className="d-flex">
                                    <Button
                                        className="mx-1"
                                        onClick={() => {
                                            eliminarProducto(producto._id);
                                        }}
                                    >
                                        Eliminar
                                    </Button>
                                    <Link
                                        to={`/editar-producto/${producto.codigo}`}
                                        className="btn btn-primary mx-1"
                                    >
                                        Editar
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <PaginacionControl postsPerPage={page} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
            </div>
        </div>
    )
}

export default ListaProductAdmin