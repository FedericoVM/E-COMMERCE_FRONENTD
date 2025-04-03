import React, { useEffect, useState } from "react";
import ContenedorArray from "./ContenedorArray";
import { Button} from "react-bootstrap";
import { toast } from "sonner";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { useLocation } from "react-router-dom";
import "./csspaginacion/ListaFavoritos.css";
import { AdminHook } from "../../../context/Contexto de Admin/AdminHook";

const Paginacion = ({
  lista,
  card,
  setArrayBuscar,
  arrayBuscar,
  mostrarBarra,
}) => {
  const {
    currentPageWeb,
    currentPageTablet,
    currentPageMobile,
    paginateWeb,
    paginateTablet,
    paginateMobile,
    productosHome
  } = ProductosHook();

  const {usuariosAdmin} = AdminHook()

  const location = useLocation();

  const [page, setPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function numerosProductos(array, currentP, numero) {
    const indexOfLastPost = currentP * (page - numero);
    const indexOfFirstPost = indexOfLastPost - (page - numero);
    const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  }

  const filtrarProductosBusqueda = (productos, buscar) =>{
    if(buscar == "destacado" || buscar == "destacados") {
      let productosDestacados = productos.filter((produc)=>{
        return produc.destacado === true
      })
      return productosDestacados
    } else {
    let productosEncontrados = productos.filter((produc) => {
      return (
        produc.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
        produc.marca.toLowerCase().includes(buscar.toLowerCase()) ||
        produc.categoria.toLowerCase().includes(buscar.toLowerCase())
      );
    })
    return productosEncontrados
  }
  }

  const filtrarUsuariosBusqueda = (usuarios,buscar) =>{
    let usuariosEncontrados = usuarios.filter((user) =>{
      return (
        user.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
        user.apellido.toLowerCase().includes(buscar.toLowerCase()) ||
        user.email.toLowerCase().includes(buscar.toLowerCase())
      );
    })
    return usuariosEncontrados
  }

  const buscarUsuario = (e) => {
    e.preventDefault();

    paginate(1)

    let productosEncontrados;

    let usuariosEncontrados;

    let buscar = e.target.buscar.value;

    if(card === "listaProductosAdmin") {
      productosEncontrados = filtrarProductosBusqueda(productosHome, buscar)
      if(productosEncontrados.length === 0){
        return toast.warning("Producto No encontrado")
      } else {
        setArrayBuscar(productosEncontrados)
      }
    }

    if(card === "usuarios"){
      usuariosEncontrados = filtrarUsuariosBusqueda(usuariosAdmin, buscar)
      if(usuariosEncontrados.length === 0){
        return toast.warning("Usuario no encontrado")
      } else {
        setArrayBuscar(usuariosEncontrados)
      }
    }
  };

  let webProductos = numerosProductos(lista, currentPageWeb, 0);
  let tabletProductos = numerosProductos(lista, currentPageTablet, 3);
  let mobileProductos = numerosProductos(lista, currentPageMobile, 5);
  let adminLista = numerosProductos(lista, currentPage, 5);

  useEffect(() => {
    paginateWeb(1);
    paginateTablet(1);
    paginateMobile(1);
  }, [location]);

  return (
    <>
      {mostrarBarra ? (
        <div className="d-flex container col-12 justify-content-center m-0 my-sm-2 p-0">
          <form
            onSubmit={buscarUsuario}
            className="d-flex flex-column flex-md-row col-12 justify-content-center my-sm-3 align-items-center"
          >
            <div className="d-flex flex-column justify-content-evenly col-10 col-md-8 flex-sm-row align-items-center">
              <h3 className="text-center m-0 label-buscador-paginacion">
                Buscar
              </h3>
              <input
                name="buscar"
                type="search"
                placeholder={
                  card === "usuarios"
                    ? "Ingresar nombre, apellido o email"
                    : "Ingresar nombre, marca o categoria"
                }
                className="form-control input-buscador-paginacion align-self-center w-75 rounded border"
              />
            </div>
            <div className="d-flex justify-content-evenly col-10 col-sm-6 col-md-4 mt-2 mt-md-0 container">
              <Button type="submit" className="boton-buscar-paginacion">
                Buscar
              </Button>
              <Button
                className="boton-refresh-paginacion"
                onClick={() => {
                  setArrayBuscar(null);
                }}
              >
                Refresh
              </Button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <ContenedorArray
        card={card}
        paginate={paginate}
        page={page}
        currentPage={currentPage}
        totalPosts={lista.length}
        currentPosts={webProductos}
        currentPostsMd={tabletProductos}
        adminLista={adminLista}
        currentPostsSm={mobileProductos}
        arrayBuscar={arrayBuscar}
      />
    </>
  );
};

export default Paginacion;
