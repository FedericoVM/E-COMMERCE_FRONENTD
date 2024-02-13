import React from 'react'
import PaginacionControl from './PaginacionControl'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../home/productCard/ProductCard'
import MostrarProductosLg from './MostrarProductosLg'
import MostrarProductosMd from './MostrarProductosMd'
import MostrarProductosSm from './MostrarProductosSm'

const CardsProductos = ({ currentPosts, paginate, currentPage, totalPosts, page,currentPostsMd,currentPostsSm,token,listaCarrito }) => {
    return (
        <>
            {currentPosts.length > 0 ? <div>
                <div>
                    <MostrarProductosLg currentPosts={currentPosts} paginate={paginate} currentPage={currentPage} totalPosts={totalPosts} page={page} token={token} listaCarrito={listaCarrito} />
                </div>
                <div>
                    <MostrarProductosMd currentPostsMd={currentPostsMd} paginate={paginate} currentPage={currentPage} totalPosts={totalPosts} page={page} token={token} listaCarrito={listaCarrito}/>
                </div>
                <div>
                    <MostrarProductosSm currentPostsSm={currentPostsSm} paginate={paginate} currentPage={currentPage} totalPosts={totalPosts} page={page} token={token} listaCarrito={listaCarrito}/>
                </div>
              
            </div> : <h1>Cargando..</h1>}


        </>
    )
}

export default CardsProductos