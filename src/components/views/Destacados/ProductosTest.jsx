
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



import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsSuitHeartFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

const ProductosTest = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }

  return (
    <Row className="g-4">
      {posts.map(( post, idx) => (
        <Col xs={12} sm={6} md={4} key={idx}>
          <Card>
            <div>
            <Card.Img className='border-bottom' variant="top" src="https://as01.epimg.net/meristation/imagenes/2021/07/15/mexico/1626328445_984933_1626329813_sumario_normal.jpg" />
            <Card.Title className='text-white title-precio rounded'>$18.999</Card.Title>
            <Button variant='primary' className='boton-favorito'><BsSuitHeartFill/></Button>
            </div>
            <Card.Body className='d-flex flex-column'>
                <div className=''>
                    <div className='d-flex justify-content-between container'>
              <Card.Title className='text-primary'>Card nombre</Card.Title>
              
              </div>
              <p className='bg-primary bg-opacity-10 rounded descripcion-card-producto'>
                {post.body}
              </p>
              </div>
              <div className='d-flex justify-content-around'>
                
                <Button variant='success' className='opacity-75 w-25 fs-3'><MdShoppingCart/></Button>
                <Button variant='warning' className='opacity-75 fs-4'>Comprar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}


