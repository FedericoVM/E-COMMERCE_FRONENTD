import React, { useState } from "react";
import ContenedorArray from "./ContenedorArray";
import { Button } from "react-bootstrap";

const Paginacion = ({ lista, card, token, setProductos, setArrayBuscar, arrayBuscar, mostrarUsuarios, mostrarBarra }) => {

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

        let buscar = e.target.buscar.value;


        let usuarioEncontrado = lista.filter((usuario) => {
            if (usuario.apellido) {
                return (usuario.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.apellido.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.email.toLowerCase().includes(buscar.toLowerCase())
                )
            } else {
                return (usuario.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.marca.toLowerCase().includes(buscar.toLowerCase()) ||
                    usuario.categoria.toLowerCase().includes(buscar.toLowerCase())
                )
            }
        });

        if (usuarioEncontrado.length <= 0) {
            return alert("Usuario o Producto no encontrado");
        }
        setArrayBuscar(usuarioEncontrado);
    };

    let webProductos = numerosProductos(lista, currentPage, 0);
    let tabletProductos = numerosProductos(lista, currentPage, 3);
    let mobileProductos = numerosProductos(lista, currentPage, 5);
    return (
        <>
            {mostrarBarra ? <div className="d-flex container justify-content-center mt-2">
                <h3>Buscar</h3>
                <form
                    onSubmit={buscarUsuario}
                    className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center"
                >
                    <input
                        name="buscar"
                        type="text"
                        placeholder={card === "usuarios" ? "Ingresar nombre,apellido o email" : "Ingresar nombre,marca o categoria "}
                        className="d-flex align-self-center rounded border w-75"
                    />
                    <div className="d-flex justify-content-evenly mt-2 container">
                        <Button type="submit">Buscar</Button>
                        <Button
                            variant="success"
                            onClick={() => {
                                setArrayBuscar([]);
                            }}
                        >
                            Refresh
                        </Button>
                    </div>
                </form>
            </div> : ""}

            <ContenedorArray card={card} paginate={paginate} page={page} currentPage={currentPage} totalPosts={lista.length} currentPosts={webProductos} currentPostsMd={tabletProductos} currentPostsSm={mobileProductos} token={token} setProductos={setProductos} arrayBuscar={arrayBuscar} mostrarUsuarios={mostrarUsuarios} />
        </>


    );
};

export default Paginacion;
