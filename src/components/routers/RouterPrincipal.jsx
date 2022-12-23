import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import React, { useEffect, useState } from "react";
import Registro from "../views/Registro/Registro";
import Header from "../layout/Header/Header";
import Home from "../views/Home/Home";
import Electrodomesticos from "../views/Categorias/Electrodomesticos";
import Computacion from "../views/Categorias/Computacion";
import AireLibre from "../views/Categorias/AireLibre";
import Contacto from "../views/Contacto/Contacto";
import Destacados from "../views/Destacados/Destacados";

export const RouterPrincipal = () => {
  const url = "http://localhost:4123/api/productos/obtener-productos";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const resp = await fetch(url);
      const productosApi = await resp.json();
      setProducts(productosApi);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/electrodomesticos" element={<Electrodomesticos products={products}/>}/>
        <Route path="/computacion" element={<Computacion products={products}/>}/>
        <Route path="/aire-libre" element={<AireLibre products={products}/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/destacados" element={<Destacados/>}/>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};
