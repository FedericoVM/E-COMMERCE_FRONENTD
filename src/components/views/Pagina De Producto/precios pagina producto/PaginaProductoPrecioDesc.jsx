import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import "./paginaProductoPrecioDesc.css";

const PaginaProductoPrecioDesc = ({ producto }) => {
  const { formatPrecio, formatPrecioDescuento, productosHome } =
    ProductosHook();

  return (
    <div className="d-flex flex-column justify-content-center m-0 align-items-center h-75 col-md-8">
      <p className="precio-sin-descuento-pagina-producto m-0">
        {formatPrecio(producto.precio)}
      </p>
      <div className="d-flex flex-row justify-content-center justify-content-md-evenly col-12 contenedor-precio-descuento align-items-center">
        <p className="precio-con-descuento-pagina-producto m-0">
          {formatPrecioDescuento(producto.precio, producto.descuento)}
        </p>
        <p className="descuento-pagina-producto mx-2 mx-md-0 m-0">{producto.descuento}% OFF</p>
      </div>
    </div>
  );
};

export default PaginaProductoPrecioDesc;
