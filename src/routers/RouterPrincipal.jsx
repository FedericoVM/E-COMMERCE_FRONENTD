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
import Registro from "../components/views/Registro/Registro"
import Login from "../components/views/Login/Login"
import Favoritos from "../components/views/Favoritos/Favoritos"

export const RouterPrincipal = () => {

  const [productos, setProductos] = useState([]);

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
          <Header/>
          <Routes>
            <Route path="/" element={<Home productos = {productos} />} />
            <Route path="/computacion" element={<Computacion productos = {productos}  />} />
            <Route path="/electrodomesticos" element={<Electrodomesticos productos = {productos}  />} />
            <Route path="/aireLibre" element={<AireLibre productos = {productos}  />} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/destacados" element={<Destacados/>} />
            <Route path="/favoritos" element={<Favoritos/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    );
};
