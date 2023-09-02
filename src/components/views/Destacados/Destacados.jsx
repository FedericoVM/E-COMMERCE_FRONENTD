import axios from 'axios';
import { useEffect, useState } from 'react';
import Productos from './Productos';
import Paginacion from '../paginacion/Paginacion';

const Destacados = ({productos}) => {

 

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nuevoArray = productos.filter(producto => producto.destacado === true)


  return (
    <div className='d-flex'>
    <div className='container col-12 col-md-9'>
        <h1 className='my-3'>Productos Destacados</h1>
        <hr/>
        {/* <Productos nuevoArray={nuevoArray} posts={currentPosts} loading={loading}/> */}
        <Productos nuevoArray={nuevoArray}/>
        <Paginacion
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
    <h1 className='col-md-3 d-none d-md-block text-center align-self-center'>Side</h1>
    </div>
  )
}

export default Destacados