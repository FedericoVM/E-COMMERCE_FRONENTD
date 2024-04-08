import { Button, Table } from 'react-bootstrap';
import PaginacionControl from './PaginacionControl';
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook';
import { AdminHook } from '../../../context/Contexto de Admin/AdminHook';

const ListaUsuarios = ({ paginate, currentPage, page, totalPosts, currentPosts, arrayBuscar }) => {

    const {tokenUser} = UserHook()
    const {mostrarUsuariosAdmin, cambiarRolUser, eliminarUsuario} = AdminHook()

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
                        {arrayBuscar.length == 0
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
                                        <Button onClick={() => {cambiarRolUser(usuario.role, usuario._id, tokenUser, mostrarUsuariosAdmin)}}> {usuario.role === "admin" ? "Desactivar" : "Activar"} </Button>
                                    </td>

                                    <td className="col-1 td-favoritos">
                                        <Button
                                            onClick={() => {
                                                eliminarUsuario(usuario._id, tokenUser, mostrarUsuariosAdmin)
                                            }}
                                            variant="danger"
                                        >
                                            X
                                        </Button>
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
                                        <Button onClick={() => {cambiarRolUser(usuario.role, usuario._id, tokenUser, mostrarUsuariosAdmin)}}> {usuario.role === "admin" ? "Desactivar" : "Activar"} </Button>
                                    </td>
                                    <td className="col-1 text-center td-favoritos">
                                        <Button
                                            onClick={() => {
                                                eliminarUsuario(usuario._id, tokenUser, mostrarUsuariosAdmin)
                                            }}
                                            variant="danger"
                                        >
                                            X
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <div>
                    <PaginacionControl postsPerPage={page} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} />
                </div>
            </div>
        </>
    )
}

export default ListaUsuarios