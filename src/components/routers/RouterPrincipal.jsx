import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import React, { useEffect, useState } from "react";
import Header from "../layout/Header/Header";
import Home from "../views/Home/Home";
import Electrodomesticos from "../views/Categorias/Electrodomesticos";
import Computacion from "../views/Categorias/Computacion";
import AireLibre from "../views/Categorias/AireLibre";
import Contacto from "../views/Contacto/Contacto";
import Destacados from "../views/Destacados/Destacados";
import jwtDecode from "jwt-decode";
import AdminProductos from "../views/ProductosCrud/AdminProductos";
import AdminUsers from "../views/UsuariosCrud/AdminUsers";
import EditarProducto from "../views/ProductosCrud/EditarProducto";

export const RouterPrincipal = () => {
  const [products, setProducts] = useState([]);
  const [usersApi, setUsersApi] = useState([]);
  const [userLog, setUserLog] = useState(null);
  const url = "http://localhost:4123/api/productos/obtener-productos";
  const urlUsers = "http://localhost:4123/api/users/obtener-usuarios"

  useEffect(() => {
    getApi();
    getUser();
    getUsers();
  }, []);

  const getUsers = async() => {
    try {
      const res = await fetch(urlUsers);
      const resUsers = await res.json();
      setUsersApi(resUsers)
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = () => {
    if(userLog === null) {
    const token = JSON.parse(localStorage.getItem('token')) || null;
    if(token) {
    let tokenDecoded = jwtDecode(token);
    if(tokenDecoded.exp <= Date.now()){
      localStorage.clear();
      setUserLog(null)
    } else {
      setUserLog(tokenDecoded)
    }
  } 
}
  }

  const getApi = async () => {
    try {
      const resp = await fetch(url);
      const productosApi = await resp.json();
      productosApi.reverse()
      setProducts(productosApi);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-column">
    <BrowserRouter>
    <Header usuarioOn={userLog} getUser={getUser} setUserLog={setUserLog}/>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/electrodomesticos" element={<Electrodomesticos products={products}/>}/>
        <Route path="/computacion" element={<Computacion products={products}/>}/>
        <Route path="/aire-libre" element={<AireLibre products={products}/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/destacados" element={<Destacados products={products}/>}/>
        <Route path="/tabla-productos" element={<AdminProductos products={products} getApi={getApi}/>}/>
        <Route path="/tabla-usuarios" element={<AdminUsers usersApi={usersApi}/>}/>
        <Route path="/editar-producto/:id" element={<EditarProducto products={products} getApi={getApi}/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
};
