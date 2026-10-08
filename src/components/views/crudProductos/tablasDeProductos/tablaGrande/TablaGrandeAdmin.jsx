import Table from "react-bootstrap/Table";
import ComponentePreciosTablaAdmin from "../../../paginacion/ComponentePreciosTablaAdmin";
import ModalEliminar from "../../../Modal para confirmar/ModalEliminar";
import { Link } from "react-router-dom";
import { ProductosHook } from "../../../../../context/Contexto de Productos/ProductosHook";
import "./tablaGrandeAdmin.css";
import HoverImagenTabla from "./HoverImagenTabla";
import CeldaPrecioTablaGrande from "./CeldaPrecioTablaGrande";

const TablaGrandeAdmin = ({ productos }) => {
  const dividirListas = (array, columnas) => {
    return Array.from({ length: Math.ceil(array.length / columnas) }, (_, i) =>
      array.slice(i * columnas, i * columnas + columnas),
    );
  };

  const columnasAMostrar = dividirListas(
    productos,
    Math.ceil(productos.length / 2),
  );

  const { formatPrecio, formatPrecioDescuento } = ProductosHook();
  const eliminarProducto = (coso) => {
    console.log(coso);
  };

  return (
    <div className="contenedor-lista-grande-admin border border-2 align-items-start justify-content-center mt-3 col-12">
          <Table
            hover
            className="columnas-lista-grande-admin"
          >
            <thead>
              <tr>
                <th className="th-admin-tabla-grande-imagen border-end fw-semibold">
                  Imagen
                </th>
                <th className="th-admin-tabla-grande-nombre border-end fw-semibold">
                  Nombre
                </th>
                <th className="th-admin-tabla-grande-precio border-end fw-semibold">
                  Precio
                </th>
                <th className="th-admin-tabla-grande-precio border-end fw-semibold">
                  Destacado
                </th>
                <th className="th-admin-tabla-grande-stock border-end fw-semibold">
                  Stock
                </th>
                <th className="th-admin-tabla-grande-acciones fw-semibold">
                  Acciones
                </th>
              </tr>
            </thead >
            <tbody>
              {productos.map((prod) => (
                <tr key={prod._id} className={prod.destacado ? "py-1 fila-destacad-tabla-grande":"py-1"}>
                  <td className="th-admin-tabla-grande-imagen align-content-center py-1 text-center border-end">
                    <HoverImagenTabla productoPropiedades={prod} />
                  </td>
                  <td className="nombre-tabla-grande-admin m-1 align-content-center border-end">
                    {prod.nombre}
                  </td>
                  <td className="align-content-center p-0 border-end">
                    <CeldaPrecioTablaGrande productoData={prod}/>
                  </td>
                  <td
                    className={
                      prod.destacado
                        ? "producto-destacado-text border-end"
                        : "producto-no-destacado-text border-end"
                    }
                  >
                    <div className="d-flex col-12">
                      <p className="col-4 text-center m-0">
                        {prod.destacado ? "Si" : "No"}
                      </p>
                      <p className="col-8 text-center m-0">{`${prod.descuento}% OFF`}</p>
                    </div>
                  </td>
                  <td
                    className={
                      prod.destacado
                        ? "producto-destacado-text text-center border-end"
                        : "producto-no-destacado-text text-center border-end"
                    }
                  >
                    {prod.stock}
                  </td>
                  <td className="py-1 align-content-center">
                    <div className="d-flex justify-content-evenly">
                      <ModalEliminar
                        eliminar={eliminarProducto}
                        id={prod._id}
                        objetivo={"producto"}
                      />
                      <Link
                        to={`/editar-producto/${prod._id}`}
                        className="boton-editar-tabla-grande-admin btn border"
                      >
                        Editar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
    </div>
  );
};

export default TablaGrandeAdmin;
