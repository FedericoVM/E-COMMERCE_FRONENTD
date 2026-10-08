import { ProductosHook } from "../../../../../context/Contexto de Productos/ProductosHook";

const CeldaPrecioTablaGrande = ({ productoData }) => {
  const { formatPrecio, formatPrecioDescuento } = ProductosHook();

  return (
    <div className="d-flex flex-column-reverse col-12 justify-content-evenly">
      {productoData.destacado ? (
        <p className="producto-destacado-text m-0">
          {formatPrecioDescuento(productoData.precio, productoData.descuento)}
        </p>
      ) : (
        <p className="m-0 text text-center">
          {formatPrecio(productoData.precio)}
        </p>
      )}
      {productoData.destacado && (
        <p className=" m-0 precio-anterior-a-descuento">
          ${productoData.precio}
        </p>
      )}
    </div>
  );
};

export default CeldaPrecioTablaGrande;
