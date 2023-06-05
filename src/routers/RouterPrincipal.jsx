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

export const RouterPrincipal =  () => {

  const [productos, setProductos] = useState([]);
  const [token,setToken] = useState(null)


  const verProductos = async  () => {
    try {
      const respuesta = await instance.get("/productos")
      setProductos(respuesta.data)
    } catch (error) {
      console.log(error);
    }
  }


   useEffect(() => {
    verProductos();
  }, []);


    return (
      <>
        <BrowserRouter>
          <Header setToken = {setToken} />
          <Routes>
            <Route path="/" element={<Home productos = {productos} />} />
            <Route path="/computacion" element={<Computacion productos = {productos}  />} />
            <Route path="/electrodomesticos" element={<Electrodomesticos productos = {productos}  />} />
            <Route path="/aireLibre" element={<AireLibre productos = {productos}  />} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/destacados" element={<Destacados/>} />
            <Route path="/favoritos" element={<Favoritos/>} />
            <Route path="/admin-usuarios" element={<AdminUsuario  token = {token}/>} />
            <Route path="/admin-productos" element={<AdminProductos token = {token} productos= { productos}/>} />
            <Route path="/editar-producto/:id" element={<EditarProducto token = {token} productos= { productos} />} />
            <Route path="/:info" element={<CuentaUsuario token = {token}/> }/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    );
};
