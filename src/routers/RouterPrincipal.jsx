import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header/Header";

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

    return (
      <>
        <BrowserRouter>
          <Header/>
          <Routes></Routes>
        </BrowserRouter>
      </>
    );
  };
};
