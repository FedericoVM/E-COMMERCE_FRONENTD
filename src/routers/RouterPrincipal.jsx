import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/footer/Footer"
import Home from "../components/views/home/Home"
import instance from "../axios/instance";
import Computacion from "../components/views/Categorias/computacion/Computacion"
import Electrodomesticos from "../components/views/Categorias/electrodomesticos/Electrodomesticos"
import AireLibre from "../components/views/Categorias/aireLibre/AireLibre"
import Contacto from "../components/views/Contacto/Contacto"
import Destacados from "../components/views/Destacados/Destacados"
import Favoritos from "../components/views/Favoritos/Favoritos"
import AdminUsuario from "../components/views/crudUsuarios/AdminUsuario";
import AdminProductos from "../components/views/crudProductos/AdminProductos";
import EditarProducto from "../components/views/crudProductos/EditarProducto";
import CuentaUsuario from "../components/views/cuentaUsuario/CuentaUsuario";
import EditarUsuario from "../components/views/cuentaUsuario/EditarUsuario";
import jwt_decode from "jwt-decode"
import RutaProtegidaAdmin from "../components/layout/rutaProtegidaAdmin/RutaProtegidaAdmin";
import PaginaProducto from "../components/views/Pagina De Producto/PaginaProducto";

export const RouterPrincipal = () => {

  const [productos, setProductos] = useState([]);
  const [token, setToken] = useState(null)
  const [datosUsuario, setDatosUsuario] = useState(null)
  const [enLinea, setEnLinea] = useState(false)
  const [rol, setRol] = useState([])

  const [productosCarrito, setProductoCarrito] = useState([]);
  const [lista, setLista] = useState([]);

  const verProductos = async () => {
    try {
      const respuesta = await instance.get("/productos")
      setProductos(respuesta.data)
    } catch (error) {
      console.log(error);
    }
  }

  const mostrarUsuario = async (token_usuario) => {
    try {
      const decodificado = await jwt_decode(token_usuario)
      setRol([decodificado.role])
      setDatosUsuario(decodificado)
    } catch (error) {
      console.log(error);
    }
  }

  const mostrarProductos = (carrito, listaProductos) => {
    let resultado = [];

    if (carrito.length > 0) {
      carrito.forEach((producto) => {
        let productosExistentes = listaProductos.some((prod) => {
          return prod._id === producto.productos
        })

        if (productosExistentes) {
          listaProductos.find((c) => {
            if (producto.productos === c._id) {
              let productoCarrito = {
                id: producto._id,
                imagen: c.imagen,
                nombre: c.nombre,
                precio: c.precio,
                stock: c.stock,
                cantidad: producto.cantidad,
              }
              resultado.push(productoCarrito);
            }
          });
        } else {
          let productoCarrito = {
            id: producto._id,
            imagen: "Eliminado",
            nombre: "Eliminado",
            precio: "Eliminado",
            cantidad: "Eliminado",
          }
          resultado.push(productoCarrito)
        }
      })
      setProductoCarrito(resultado);
    }
  };

  const listaCarrito = async (token) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const respuesta = await instance.get("/carrito", config);
      setLista(respuesta.data);
    } catch (error) {
      return console.log(error.response.data);
    }
  };

  useEffect(() => {
    mostrarProductos(lista, productos)
  }, [lista]);

  useEffect(() => {
    verProductos();
    const tokenL = localStorage.getItem("tokenUsuario")
    if (tokenL) {
      setToken(tokenL)
      mostrarUsuario(tokenL)
      setEnLinea(true)
      listaCarrito(tokenL);
    }
  }, [token])

  return (
    <>
      <BrowserRouter>
        < Header enLinea={enLinea} setEnLinea={setEnLinea} setToken={setToken} datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} setRol={setRol} token={token} productosCarrito={productosCarrito} listaCarrito={listaCarrito} />
        <Routes>
          <Route path="/" element={<Home productos={productos} token={token} listaCarrito={listaCarrito} />} />
          <Route path="/computacion" element={<Computacion productos={productos} token={token} listaCarrito={listaCarrito} />} />
          <Route path="/electrodomesticos" element={<Electrodomesticos productos={productos} token={token} listaCarrito={listaCarrito} />} />
          <Route path="/aireLibre" element={<AireLibre productos={productos} token={token} listaCarrito={listaCarrito} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/destacados" element={<Destacados productos={productos} token={token} listaCarrito={listaCarrito} />} />
          <Route path="/producto/:id" element={<PaginaProducto productos={productos}/>} />

          <Route element={<RutaProtegidaAdmin autenticado={rol.includes("admin") || rol.includes("usuario")} />}>
            <Route path="/editar-usuario/:id" element={<EditarUsuario datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} token={token} setToken={setToken} />} />
            <Route path="/cuenta-usuario" element={<CuentaUsuario usuario={datosUsuario} />} />
            <Route path="/favoritos" element={<Favoritos token={token} datosUsuario={datosUsuario} listaProductos={productos} />} />
          </Route>
          
          <Route element={<RutaProtegidaAdmin autenticado={rol.includes("admin")} />}>
            <Route path="/admin-usuarios" element={<AdminUsuario datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} token={token} setToken={setToken} />} />
            <Route path="/admin-productos" element={<AdminProductos token={token} setProductos={setProductos} productos={productos} verProductos={verProductos} />} />
            <Route path="/editar-producto/:id" element={<EditarProducto token={token} setProductos={setProductos} productos={productos} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
