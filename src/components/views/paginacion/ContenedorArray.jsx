import React from 'react'
import CardsProductos from './CardsProductos'
import ListaUsuarios from './ListaUsuarios'
import ListaProductAdmin from './ListaProductAdmin'
import ProductosCategoria from './ProductosCategoria'
import ProductosDestacados from './ProductosDestacados'

const ContenedorArray = ({ paginate, currentPage, page, totalPosts, currentPosts, card, token, setProductos, arrayBuscar, mostrarUsuarios, currentPostsMd, currentPostsSm }) => {


  const EvaluarString = ({ string }) => {
    switch (string) {
      case "card":
        return <CardsProductos paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} currentPostsMd={currentPostsMd} currentPostsSm={currentPostsSm} />

      case "usuarios":
        return <ListaUsuarios paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} token={token} arrayBuscar={arrayBuscar} mostrarUsuarios={mostrarUsuarios} />

      case "listaProductosAdmin":
        return <ListaProductAdmin paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} token={token} setProductos={setProductos} arrayBuscar={arrayBuscar} />

      case "categoria":
        return <ProductosCategoria paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />

      case "destacados":
        return <ProductosDestacados paginate={paginate} currentPage={currentPage} page={page} totalPosts={totalPosts} currentPosts={currentPosts} />

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