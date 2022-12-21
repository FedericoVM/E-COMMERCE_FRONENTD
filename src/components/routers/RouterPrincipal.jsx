import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Destacados from "../views/Destacados/Destacados";
import DestacadosTest from "../views/Destacados/DestacadosTest";

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
          <Route exact path="/destacados" element={<Destacados />} />
          <Route exact path="/destacados-test" element={<DestacadosTest />} />
        </Routes>
      </BrowserRouter>
    );
 
};
