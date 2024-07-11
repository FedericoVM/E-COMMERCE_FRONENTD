import React, { useEffect, useState } from "react";
import ContenedorArray from "./ContenedorArray";
import { Button } from "react-bootstrap";
import { toast } from "sonner";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { useLocation } from "react-router-dom";

const Paginacion = ({ lista ,card, setArrayBuscar, arrayBuscar, mostrarBarra }) => {

    const {currentPageWeb, currentPageTablet, currentPageMobile, paginateWeb, paginateTablet, paginateMobile} = ProductosHook()
    
    const location = useLocation()

    const [page, setPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    function numerosProductos(array, currentP, numero) {

        const indexOfLastPost = currentP * (page - numero);
        const indexOfFirstPost = indexOfLastPost - (page - numero);
        const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost)
        return currentPosts
    }

    const buscarUsuario = (e) => {
        e.preventDefault();

        let arrayReconocedor = [0]

        let buscar = e.target.buscar.value;

        let usuarioEncontrado = lista.filter((usuario) => {
            if (usuario.apellido) {
                arrayReconocedor.splice(0, 1, "Usuario")
                return (usuario.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.apellido.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.email.toLowerCase().includes(buscar.toLowerCase())
                )
            } else {
                arrayReconocedor.splice(0, 1, "Producto")
                return (usuario.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.marca.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.categoria.toLowerCase().includes(buscar.toLowerCase())
                )
            }
        });

        if (usuarioEncontrado.length <= 0) {
            return toast.warning(`${arrayReconocedor[0]} no encontrado`);
        }
        setArrayBuscar(usuarioEncontrado);
    };

    let webProductos = numerosProductos(lista, currentPageWeb, 0);
    let tabletProductos = numerosProductos(lista, currentPageTablet, 3);
    let mobileProductos = numerosProductos(lista, currentPageMobile, 5);
    let adminLista = numerosProductos(lista, currentPage, 5)

    useEffect(()=>{
        paginateWeb(1);
        paginateTablet(1);
        paginateMobile(1)
    }, [location])

    return (
        <>
            {mostrarBarra ? <div className="d-flex container justify-content-center mt-2">
                
                <form
                    onSubmit={buscarUsuario}
                    className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center"
                >
                    <div className="d-flex flex-column justify-content-around flex-md-row align-items-center col-12">
                    <h3 className="col-4 text-center">Buscar</h3>
                    <input
                        name="buscar"
                        type="text"
                        placeholder={card === "usuarios" ? "Ingresar nombre,apellido o email" : "Ingresar nombre,marca o categoria "}
                        className="d-flex align-self-center rounded border col-6 col-md-8 "
                    />
                    </div>
                    <div className="d-flex justify-content-evenly mt-2 container">
                        <Button type="submit">Buscar</Button>
                        <Button
                            variant="success"
                            onClick={() => {
                                setArrayBuscar(null);
                            }}
                        >
                            Refresh
                        </Button>
                    </div>
                </form>
            </div> : ""}
            <ContenedorArray card={card} paginate={paginate} page={page} currentPage={currentPage} totalPosts={lista.length} currentPosts={webProductos} currentPostsMd={tabletProductos} adminLista={adminLista} currentPostsSm={mobileProductos} arrayBuscar={arrayBuscar}/>
        </>
    );
};

export default Paginacion;