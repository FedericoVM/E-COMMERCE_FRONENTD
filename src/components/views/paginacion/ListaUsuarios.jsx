import { Table } from 'react-bootstrap';
import PaginacionControl from './PaginacionControl';
import ModalEliminar from '../Modal para confirmar/ModalEliminar';

const ListaUsuarios = ({ paginate, currentPage, page, totalPosts, currentPosts, arrayBuscar }) => {

    return (
        <div className='col-11 my-2 my-md-0'>
            <div className="overflow-auto">
                <Table bordered hover className='text-center' style={{ tableLayout: 'fixed', width: '100%' }}>
                    <thead>
                        <tr className='text-center'>
                            <th className='th-adminUser-nombre-apellido'>Nombre y Apellido</th>
                            <th className='th-adminUser-email'>Email</th>
                            <th className='th-adminUser-rol'>Rol</th>
                            <th className='th-adminUser-activo'>Activo</th>
                            <th className='th-adminUser-boton-cambio-rol'>Cambiar Rol</th>
                            <th className='th-adminUser-Eliminar'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!arrayBuscar
                            ? currentPosts.map((usuario, index) => (
                                <tr key={index} className='text-center'>
                                    <td className="align-content-center">
                                        {usuario.nombre} {usuario.apellido}
                                    </td>
                                    <td className="align-content-center">
                                        {usuario.email}
                                    </td>
                                    <td className="align-content-center">
                                        {usuario.role}
                                    </td>
                                    <td className="align-content-center">
                                        {usuario.active ? "Activo" : "Inactivo"}
                                    </td>

                                    <td className="align-content-center">
                                        <ModalEliminar usuario={usuario} objetivo={"rol"}/>
                                    </td>

                                    <td className="align-content-center">
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
            </div>
            <PaginacionControl postsPerPage={page-5} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

export default ListaUsuarios