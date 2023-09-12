import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Productos from "./Productos";
import {BsSearch} from "react-icons/bs"
import {TiRefreshOutline} from 'react-icons/ti'
import PaginacionControl from "../paginacion/PaginacionControl";

const Favoritos = () => {
  const [arraySearch, setArraySearch] = useState([])
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  
  useEffect(() => {

  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arraySearch.length > 0 ? arraySearch.slice(indexOfFirstPost, indexOfLastPost) : test.slice(indexOfFirstPost, indexOfLastPost) ;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const buscarProducto = (e) => {
    e.preventDefault()
    const search = e.target.search.value
    let productoEncontrado = test.filter(producto => {
      return producto.title.toLowerCase().includes(search.toLowerCase())
    })
    setArraySearch(productoEncontrado)
  }

  return (
    <div className="">
      <div className="d-flex container justify-content-around mt-2">
        <div className="d-none d-lg-block col-6 justify-content-center align-items-center">
          <PaginacionControl
            postsPerPage={postsPerPage}
            totalPosts={arraySearch.length > 0 ? arraySearch.length : test.length}
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
        <Button type="submit"><BsSearch className="mx-1"/>Buscar</Button>
        <Button variant="success" onClick={()=> {setArraySearch([])}}><TiRefreshOutline className="mx-1 fs-4"/>Refresh</Button>
        </div>
        </form>
      </div>
      <Productos posts={currentPosts} loading={loading} />
      <div className="d-block d-flex justify-content-center container d-lg-none">
        <PaginacionControl
          postsPerPage={postsPerPage}
          totalPosts={arraySearch.length > 0 ? arraySearch.length : test.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Favoritos;