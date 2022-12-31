import axios from 'axios';
import { useEffect, useState } from 'react';
import Productos from './Productos';
import Pagination from '../Categorias/Pagination'

const Destacados = ({products}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
const destacados = products.filter(productos => {
      return productos.destacado === true
    })
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = destacados.slice(indexOfFirstPost, indexOfLastPost) ;
    

  return (
    <div>
      <div className='d-flex'>
    <div className=' col-12 col-lg-9'>
        <h1 className='my-3'>Productos Destacados</h1>
        <hr/>
        <Productos posts={currentPosts}/>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={destacados.length}
            paginate={paginate}
            currentPage={currentPage}
          />
    </div>
    <div className='d-none d-lg-block d-flex'>
          <img
              className="publicidad-img container h-100"
             src="https://github.com/leanceballos30/Proyecto-Final/blob/home/src/assets/img/main/publicidad.jpg?raw=true"
              alt="publicidad_intel"
            />
          </div>
          </div>
    </div>
  )
}

export default Destacados