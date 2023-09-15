import React, { useState } from "react";
import PaginacionControl from "./PaginacionControl";
import ListProducts from "../home/listProducts/ListProducts";
import CardsProductos from "./CardsProductos";
import ContenedorArray from "./ContenedorArray";

const Paginacion = ({lista,card,token, setProductos}) => {
   
    const [page,setPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastPost = currentPage * page;
    const indexOfFirstPost = indexOfLastPost - page;
    const currentPosts = lista.slice(indexOfFirstPost, indexOfLastPost);
    

    return (
        <ContenedorArray card ={card} paginate ={paginate} page={page} currentPage={currentPage} totalPosts = {lista.length} currentPosts ={currentPosts} token={token} setProductos = {setProductos} />

    );
};

export default Paginacion;
