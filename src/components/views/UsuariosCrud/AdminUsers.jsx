import { useState, useEffect } from "react";
import UsersTabla from "./UsersTabla";
import { Button } from "react-bootstrap";
import Pagination from "../Categorias/Pagination";

const AdminUsers = ({usersApi}) => {
    const [arraySearch, setArraySearch] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    const usuarios = usersApi.filter(user => {
        return user.role === "usuario"
      })

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = arraySearch.length > 0 ? arraySearch.slice(indexOfFirstPost, indexOfLastPost) : usuarios.slice(indexOfFirstPost, indexOfLastPost) ;
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      const buscarProducto = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        let productoEncontrado = usuarios.filter(usuario => {
          return usuario.nombre.toLowerCase().includes(search.toLowerCase())
        })
        if (productoEncontrado.length <= 0) {
          return alert("no se encontro usuario")
        }
        setArraySearch(productoEncontrado)
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
        <form onSubmit={buscarProducto} className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center">
        <input
        name="search"
          type="text"
          placeholder="Buscar producto"
          className="d-flex align-self-center rounded border w-75"
        />
        <div className="d-flex justify-content-evenly mt-2 container">
        <Button type="submit">Buscar</Button>
        <Button variant="success" onClick={()=> {setArraySearch([])}}>Refresh</Button>
        </div>
        </form>
      </div>
      <div className="w-100">
        <UsersTabla  users={currentPosts}/>
        </div>
        <div className="col-12 d-flex d-block d-md-none container justify-content-center align-items-center">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={arraySearch.length > 0 ? arraySearch.length : usuarios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        </div>
  );
}

export default AdminUsers