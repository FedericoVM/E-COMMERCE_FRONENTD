import React from 'react'
import CardsProductos from './CardsProductos'
import ListaUsuarios from './ListaUsuarios'
import ListaProductAdmin from './ListaProductAdmin'
import ProductosCategoria from './ProductosCategoria'
import ProductosDestacados from './ProductosDestacados'
import ListaFavoritos from './ListaFavoritos'

const ContenedorArray = ({ paginate, currentPage, page, totalPosts, currentPosts, card, arrayBuscar, currentPostsMd, currentPostsSm }) => {

  const EvaluarString = ({ string }) => {
    switch (string) {
      case "card":
        return <CardsProductos paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} currentPostsMd={currentPostsMd} currentPostsSm={currentPostsSm}/>

      case "usuarios":
        return <ListaUsuarios paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} arrayBuscar={arrayBuscar}/>

      case "listaProductosAdmin":
        return <ListaProductAdmin paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} arrayBuscar={arrayBuscar}/>

      case "categoria":
        return <ProductosCategoria paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts}/>

      case "destacados":
        return <ProductosDestacados paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts}/>

      case "favoritos":
        return <ListaFavoritos paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts}/>

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