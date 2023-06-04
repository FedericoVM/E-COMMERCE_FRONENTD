import axios from 'axios';
import { useEffect, useState } from 'react';
import Productos from './Productos';
import Pagination from './Pagination';

const Destacados = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
       useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='d-flex'>
    <div className='container col-12 col-md-9'>
        <h1 className='my-3'>Productos Destacados</h1>
        <hr/>
        <Productos posts={currentPosts} loading={loading}/>
        <Pagination
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