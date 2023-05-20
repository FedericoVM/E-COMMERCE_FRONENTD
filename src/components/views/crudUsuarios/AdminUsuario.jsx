import { useState, useEffect } from "react";
import UsersTabla from "./UsersTabla";
import { Button } from "react-bootstrap";
import Pagination from "../Categorias/Pagination";

const AdminUsuario = ({ListaUsuarios}) => {
    const [arrayBuscar, setArrayBuscar] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    const usuarios = ListaUsuarios.filter(user => {
        return user.role === "usuario"
      })

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = arrayBuscar.length > 0 ? arrayBuscar.slice(indexOfFirstPost, indexOfLastPost) : usuarios.slice(indexOfFirstPost, indexOfLastPost) ;
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      const buscarUsuario = (e) => {

        e.preventDefault()

        const buscar = e.target.buscar.value
        let usuarioEncontrado = usuarios.filter(usuario => {
          return usuario.nombre.toLowerCase().includes(buscar.toLowerCase())
        })
        if (usuarioEncontrado.length <= 0) {
          return alert("no se encontro usuario")
        }
        setArrayBuscar(productoEncontrado)
        paginate(1)
      }

  return (
    <div className="container">
         <div className="d-flex container justify-content-center mt-2">
        <div className="col-6 d-flex d-none d-md-block justify-content-center align-items-center">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={arraySearch.length > 0 ? arraySearch.length : usuarios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <form onSubmit={buscarUsuario} className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center">
        <input
        name="buscar"
          type="text"
          placeholder="Buscar usuario"
          className="d-flex align-self-center rounded border w-75"
        />
        <div className="d-flex justify-content-evenly mt-2 container">
        <Button type="submit">Buscar</Button>
        <Button variant="success" onClick={()=> {setArrayBuscar([])}}>Refresh</Button>
        </div>
        </form>
      </div>
      <div className="w-100">
        <UsersTabla  users={currentPosts}/>
        </div>
        <div className="col-12 d-flex d-block d-md-none container justify-content-center align-items-center">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={arrayBuscar.length > 0 ? arrayBuscar.length : usuarios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        </div>
  );
}

export default AdminUsuario