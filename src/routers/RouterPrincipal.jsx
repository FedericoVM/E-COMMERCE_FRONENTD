import { BrowserRouter, Route, Routes} from "react-router-dom";
import CambiarContrasenia from "../components/views/cambiarContrasenia/CambiarContrasenia";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/footer/Footer"
import Home from "../components/views/home/Home"
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
import EditarUsuario from "../components/views/cuentaUsuario/EditarUsuario";
import RutaProtegidaAdmin from "../components/layout/rutaProtegidaAdmin/RutaProtegidaAdmin";
import PaginaProducto from "../components/views/Pagina De Producto/PaginaProducto";
import { UserHook } from "../context/Contexto de Usuarios/UserHook";
import VentanaDeBusqueda from "../components/views/Busqueda/VentanaDeBusqueda";
import RecupContrasenia from "../components/views/recupContrasenia/RecupContrasenia";
import VerificarUsuario from "../components/views/verificar Usuario/VerificarUsuario";
import RecuperarContrasenia from "../components/views/Recuperar contrasenia/RecuperarContrasenia";
import { Toaster } from 'sonner';
import { ProductosHook } from "../context/Contexto de Productos/ProductosHook";
import { useEffect, useState } from "react";
import Nosotros from "../components/views/nosotros/Nosotros";

export const RouterPrincipal = () => {

  const {usuarioRol, usuarioFavoritos} = UserHook()

  const {productosHome, filtrarFavoritosAMostrarProducto} = ProductosHook()

  const [productosFiltrados, setProductosFiltrados] = useState([])

  const filtrarProductosSinStock = (productos) =>{
    const filtrados = productos.filter((p) =>{
      return p.stock > 0
    })
    setProductosFiltrados(filtrados)
  }

  useEffect(()=>{
    filtrarProductosSinStock(productosHome)
  }, [productosHome])

  useEffect(()=>{
    if (usuarioRol.length > 0) {
      filtrarFavoritosAMostrarProducto(productosHome, usuarioFavoritos)
    }
  },[usuarioFavoritos])

  return (
    <>
      <BrowserRouter>
      <Toaster richColors closeButton position="bottom-right"/>
        < Header/>
        <Routes>
          <Route path="/" element={<Home productos={productosFiltrados}/>}/>
          <Route path="/computacion" element={<Computacion productos={productosFiltrados}/>}/>
          <Route path="/electrodomesticos" element={<Electrodomesticos productos={productosFiltrados}/>}/>
          <Route path="/aireLibre" element={<AireLibre productos={productosFiltrados}/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/destacados" element={<Destacados productos={productosFiltrados}/>}/>
          <Route path="/producto/:id" element={<PaginaProducto/>}/>
          <Route path="/busqueda" element={<VentanaDeBusqueda productos={productosFiltrados}/>}/>
          <Route path="/recuperar-contrasenia" element={<RecupContrasenia/>}/>
          <Route path="/recuperacion-contrasenia/:token" element={<RecuperarContrasenia/>}/>
          <Route path="/usuario/:id/verify/:token" element={<VerificarUsuario/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>

          <Route element={<RutaProtegidaAdmin autenticado={usuarioRol.includes("admin") || usuarioRol.includes("usuario")} />}>
            <Route path="/editar-usuario/:id" element={<EditarUsuario/>}/>
            <Route path="/cuenta-usuario" element={<CuentaUsuario/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
            <Route path="/cambiarPassword" element={<CambiarContrasenia/>}/>
          </Route>
          
          <Route element={<RutaProtegidaAdmin autenticado={usuarioRol.includes("admin")}/>}>
            <Route path="/admin-usuarios" element={<AdminUsuario/>}/>
            <Route path="/admin-productos" element={<AdminProductos/>}/>
            <Route path="/editar-producto/:id" element={<EditarProducto/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
};