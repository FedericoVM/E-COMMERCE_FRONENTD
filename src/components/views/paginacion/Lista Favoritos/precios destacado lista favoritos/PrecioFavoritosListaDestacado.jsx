import { ProductosHook } from "../../../../../context/Contexto de Productos/ProductosHook";
import "./precioDestacadoFavorito.css";

const PrecioFavoritosListaDestacado = ({ producto }) => {
  const { formatPrecio, formatPrecioDescuento, productosHome } =
    ProductosHook();

  return (
    <div className="d-flex flex-column justify-content-evenly h-100">
      <div className="d-flex flex-row justify-content-evenly align-items-center col-12 m-0">
        <p className="m-0 porcentaje-off-lista-favoritos text-success">{producto.descuento}% OFF</p>
        <p className="precio-sin-desc-lista-favorito m-0">
          {formatPrecio(producto.precio)}
        </p>
      </div>
      <p className="precio-con-desc-lista-favorito m-0">
        {formatPrecioDescuento(producto.precio, producto.descuento)}
      </p>
    </div>
  );
};

export default PrecioFavoritosListaDestacado;
