import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Electrodomesticos from "../views/Categorias/Electrodomesticos";
import Computacion from "../views/Categorias/computacion/Computacion";
import AireLibre from "../views/Categorias/aireLibre/AireLibre";
import Login from "../views/Login/Login";
import Favoritos from "../views/Favoritos/Favoritos";
import Contacto from "../views/Contacto/Contacto";
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
        <Route  path='/electrodomesticos' element={<Electrodomesticos/>}/>
        <Route  path='/computacion' element={<Computacion/>}/>
        <Route  path='/aire-libre' element={<AireLibre/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Favoritos/>}/>
        <Route path="/" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );

};
