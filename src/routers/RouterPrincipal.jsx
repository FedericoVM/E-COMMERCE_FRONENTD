import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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


export const RouterPrincipal = () => {

  const [productos, setProductos] = useState([]);
  const [token, setToken] = useState(null)
  const [datosUsuario, setDatosUsuario] = useState(null)
  const [enLinea, setEnLinea] = useState(false)
  const [rol, setRol] = useState([])

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

  useEffect(() => {
    verProductos();
    const tokenL = localStorage.getItem("tokenUsuario")
    if (tokenL) {
      setToken(tokenL)
      mostrarUsuario(tokenL)
      setEnLinea(true)
    }

  }, [token])


  return (
    <>
      <BrowserRouter>
        < Header enLinea={enLinea} setEnLinea={setEnLinea} setToken={setToken} datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} setRol={setRol} />
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route path="/computacion" element={<Computacion productos={productos} />} />
          <Route path="/electrodomesticos" element={<Electrodomesticos productos={productos} />} />
          <Route path="/aireLibre" element={<AireLibre productos={productos} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/destacados" element={<Destacados productos={productos} />} />
          <Route path="/favoritos" element={<Favoritos />} />

          <Route element={<RutaProtegidaAdmin autenticado={rol.includes("admin") || rol.includes("usuario")} />}>
            <Route path="/editar-usuario/:id" element={<EditarUsuario datosUsuario={datosUsuario} setDatosUsuario={setDatosUsuario} token={token} setToken={setToken} />} />
            <Route path="/cuenta-usuario" element={<CuentaUsuario usuario={datosUsuario} />} />
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
