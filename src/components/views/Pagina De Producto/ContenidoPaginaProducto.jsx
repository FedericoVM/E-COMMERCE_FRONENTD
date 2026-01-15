import { Button } from "react-bootstrap";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import "./contenidoPaginaProducto.css"
import PaginaProductoPrecioDesc from "./precios pagina producto/PaginaProductoPrecioDesc";
import EliminarFavorito from "../../layout/boton favorito/EliminarFavorito";
import AgregarFavorito from "../../layout/boton favorito/AgregarFavorito";
import ModalEsperaPagoBack from "../Modal espera pago/ModalEsperaPagoBack";

const ContenidoPaginaProducto = ({ productoAMostrar }) => {

  const { obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea, obtenerCarritoUsuario, usuarioFavoritos,  cambiarBotonFavorito} =
    UserHook();
  const {agregarAFavoritos, eliminarDeFavoritos, agregarAlCarrito, comprarProducto, formatPrecio} = ProductosHook();

  const favoritoExistente = cambiarBotonFavorito(usuarioEnLinea, usuarioFavoritos, productoAMostrar._id)

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex flex-column contenedor-imagen-y-descripcion-pagina border-bottom my-3 col-12 justify-content-evenly col-lg-10">
        <div className="imagen-pagina-producto align-self-center col-md-6 mb-4 mb-md-0 rounded">
        <img
          src={`${productoAMostrar.imagen}`}
          className="imagen-pagina-producto rounded"
        />
        {favoritoExistente ?
        <EliminarFavorito eliminarFavorito={()=>{eliminarDeFavoritos(productoAMostrar._id, tokenUser, obtenerUsuarioFavoritos)}}/>
        :
        <AgregarFavorito agregarAFavorito={()=>{agregarAFavoritos(productoAMostrar._id, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea)}}/>
        }
        </div>
        <div className="col-md-5 border-start contenedor-caracteristicas-prodicto-pagina col-12 d-flex align-items-center flex-column justify-content-evenly">
          <p className="text-center nombre-pagina-producto mb-0 col-10">{productoAMostrar.nombre}</p>
          <div className="d-flex flex-column col-12">
          <div className="col-12 col-sm-11 col-md-12 d-flex flex-row contenedor-marca-categoria-stock-pagina align-items-center">
            <div className="d-flex contenedor-marca-pagina-producto flex-column col-4">
              <p className="text-center fs-5 m-0">Marca:</p>
              <p className="text-center fs-5 m-0">{productoAMostrar.marca}</p>
            </div>
            <div className="d-flex contenedor-categoria-pagina-producto flex-column col-5">
              <p className="text-center m-0">Categoria:</p>
              <p className="text-center m-0">
                {productoAMostrar.categoria}
              </p>
            </div>
            <div className="d-flex contenedor-stock-pagina-producto flex-column col-3">
              <p className="text-center m-0 fs-5">Stock:</p>
              <p className="text-center m-0 fs-5">{productoAMostrar.stock}</p>
            </div>
          </div>
          <div className="d-flex contenedor-precio-y-botones flex-column flex-md-row my-2 my-md-0 col-12 m-0 justify-content-between align-items-center">
            {!productoAMostrar.destacado ? <p className="precio-pagina-producto m-0 col-md-7 align-self-center text-center">
              {formatPrecio(productoAMostrar.precio)}
            </p>: <PaginaProductoPrecioDesc producto={productoAMostrar}/>}
            <div className="d-flex align-items-center contenedor-botones flex-row flex-md-column justify-content-evenly my-2 col-12 col-sm-12 col-md-4">
                <Button className="boton-carrito-pagina-producto col-md-12" onClick={()=>agregarAlCarrito(productoAMostrar._id, obtenerCarritoUsuario, tokenUser, usuarioEnLinea)}>Agregar al Carrito</Button>
                <ModalEsperaPagoBack classPropiedad={" my-2 boton-comprar-pagina-producto col-md-12"} comprarProducto={()=> comprarProducto(productoAMostrar._id, tokenUser)}/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="d-flex m-2 py-md-2 px-md-3 rounded contenedor-descripcion-pagina-producto flex-column col-md-11 col-lg-9">
      <p className="col-lg-8 m-0 fs-5">Descripcion:</p>
      <section className="descripcion-pagina-producto">{productoAMostrar.descripcion}</section>
      </div>
    </div>
  );
};

export default ContenidoPaginaProducto;
