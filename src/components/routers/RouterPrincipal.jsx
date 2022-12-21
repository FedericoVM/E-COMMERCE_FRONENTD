import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import React, { useEffect, useState } from "react";
import Registro from "../views/Registro/Registro";
import Header from "../layout/Header/Header";
import Home from "../views/Home/Home";
import Electrodomesticos from "../views/Categorias/Electrodomesticos";

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
        <Route path="/electrodomesticos" element={<Electrodomesticos/>}/>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};
