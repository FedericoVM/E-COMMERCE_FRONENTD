import { Table } from 'react-bootstrap';
import PaginacionControl from './PaginacionControl';
import ModalEliminar from '../Modal para confirmar/ModalEliminar';

const ListaUsuarios = ({ paginate, currentPage, page, totalPosts, currentPosts, arrayBuscar }) => {

    return (
        <>
            <div className="d-flex flex-column w-100">
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th>Nombre y Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Activo</th>
                            <th>Admin.</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!arrayBuscar
                            ? currentPosts.map((usuario, index) => (
                                <tr key={index} className='text-center'>
                                    <td className="col-4 td-favoritos">
                                        {usuario.nombre} {usuario.apellido}
                                    </td>
                                    <td className="col-4 td-favoritos">
                                        {usuario.email}
                                    </td>
                                    <td className="col-2 td-favoritos">
                                        {usuario.role}
                                    </td>
                                    <td className="col-2 td-favoritos">
                                        {usuario.active ? "Activo" : "Inactivo"}
                                    </td>

                                    <td className="col-1 td-favoritos">
                                        <ModalEliminar usuario={usuario} objetivo={"rol"}/>
                                    </td>

                                    <td className="col-1 td-favoritos">
                                        <ModalEliminar usuario={usuario} objetivo={"usuario"}/>
                                    </td>
                                </tr>
                            ))
                            : arrayBuscar.map((usuario, index) => (
                                <tr key={index}>
                                    <td className="col-4 text-center td-favoritos">
                                        {usuario.nombre} {usuario.apellido}
                                    </td>
                                    <td className="col-4 text-center td-favoritos">
                                        {usuario.email}
                                    </td>
                                    <td className="col-2 text-center td-favoritos">
                                        {usuario.role}
                                    </td>
                                    <td className="col-2 text-center td-favoritos">
                                        {usuario.active ? "Activo" : "Inactivo"}
                                    </td>
                                    <td className="col-1 text-center td-favoritos">
                                    <ModalEliminar usuario={usuario} objetivo={"rol"}/>
                                    </td>
                                    <td className="col-1 text-center td-favoritos">
                                    <ModalEliminar usuario={usuario} objetivo={"usuario"}/>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <div>
                    <PaginacionControl postsPerPage={page-5} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
                </div>
            </div>
        </>
    )
}

export default ListaUsuarios