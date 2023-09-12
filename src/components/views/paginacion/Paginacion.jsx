import React, { useState } from "react";
import PaginacionControl from "./PaginacionControl";
import ListProducts from "../home/listProducts/ListProducts";
import CardsProductos from "./CardsProductos";
import ContenedorArray from "./ContenedorArray";

const Paginacion = ({lista,card}) => {
   console.log(lista);
    const [page,setPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastPost = currentPage * page;
    const indexOfFirstPost = indexOfLastPost - page;
    const currentPosts = lista.slice(indexOfFirstPost, indexOfLastPost);
    

    return (
        <ContenedorArray card ={card} paginate ={paginate} page={page} currentPage={currentPage} totalPosts = {lista.length} currentPosts ={currentPosts}  />

    );
};

export default Paginacion;
