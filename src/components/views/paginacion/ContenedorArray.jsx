import React from 'react'
import CardsProductos from './CardsProductos'
import ListaUsuarios from './ListaUsuarios'
import ListaProductAdmin from './ListaProductAdmin'
import ProductosCategoria from './ProductosCategoria'

const ContenedorArray = ({ paginate, currentPage, page, totalPosts, currentPosts, card }) => {

  const EvaluarString = ({ string }) => {
    switch (string) {
      case "card":
        return <CardsProductos paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />

      case "usuarios":
        return <ListaUsuarios paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />

      case "listaProductosAdmin":
        return <ListaProductAdmin paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />

      case "categoria":
        return <ProductosCategoria paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />




      default:

        break;
    }
  }
  return (
    <>
      {/* { card === "card" ? <CardsProductos  paginate = {paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />  : <h1>hOla</h1> } */}
      <EvaluarString string={card} />
    </>
  )
}

export default ContenedorArray