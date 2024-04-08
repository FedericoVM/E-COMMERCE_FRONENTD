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

export const RouterPrincipal = () => {

  const {usuarioRol} = UserHook()

  return (
    <>
      <BrowserRouter>
        < Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/computacion" element={<Computacion/>}/>
          <Route path="/electrodomesticos" element={<Electrodomesticos/>}/>
          <Route path="/aireLibre" element={<AireLibre/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/destacados" element={<Destacados/>}/>
          <Route path="/producto/:id" element={<PaginaProducto/>}/>
          <Route path="/busqueda" element={<VentanaDeBusqueda/>}/>
          <Route path="/recuperar-contrasenia" element={<RecupContrasenia/>}/>
          <Route path="/recuperacion-contrasenia/:token" element={<RecuperarContrasenia/>}/>
          <Route path="/usuario/:id/verify/:token" element={<VerificarUsuario/>}/>

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
      </BrowserRouter>
      <Footer />
    </>
  );
};