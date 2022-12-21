import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const RouterPrincipal = () => {
  const url = process.env.VITE_API_URL;

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
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    );
  };
};
