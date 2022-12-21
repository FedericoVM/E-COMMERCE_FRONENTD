import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Favoritos from "../views/Favoritos/Favoritos";

export const RouterPrincipal = () => {
  const url = "http://localhost:3001/productos";

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
      <Routes>
        <Route path="/" element={<Favoritos/>}/>
      </Routes>
    </BrowserRouter>
  );
};
