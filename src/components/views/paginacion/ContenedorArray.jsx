import React from 'react'
import CardsProductos from './CardsProductos'
import ListaUsuarios from './ListaUsuarios'
import ListaProductAdmin from './ListaProductAdmin'
import ProductosCategoria from './ProductosCategoria'
import ProductosDestacados from './ProductosDestacados'
import ListaFavoritos from './Lista Favoritos/ListaFavoritos'

const ContenedorArray = ({ paginate, currentPage, page, totalPosts, currentPosts, card, arrayBuscar, adminLista, currentPostsMd, currentPostsSm }) => {

  const EvaluarString = ({ string }) => {
    switch (string) {
      case "card":
        return <CardsProductos page={page} totalPosts={totalPosts} currentPosts={currentPosts} currentPostsMd={currentPostsMd} currentPostsSm={currentPostsSm}/>

      case "usuarios":
        return <ListaUsuarios paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} arrayBuscar={arrayBuscar}/>

      case "listaProductosAdmin":
        return <ListaProductAdmin paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} adminLista={adminLista} arrayBuscar={arrayBuscar}/>

      case "categoria":
        return <ProductosCategoria page={page} totalPosts={totalPosts} currentPosts={currentPosts} currentPostsMd={currentPostsMd} currentPostsSm={currentPostsSm}/>

      case "destacados":
        return <ProductosDestacados paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} currentPostsMd={currentPostsMd} currentPostsSm={currentPostsSm}/>

      case "favoritos":
        return <ListaFavoritos paginate={paginate} currentPage={currentPage} page={page-5} totalPosts={totalPosts} currentPostsSm={currentPostsSm}/>

      default:
        break;
    }
  }
  return (
    <>
      <EvaluarString string={card} />
    </>
  )
}

export default ContenedorArray