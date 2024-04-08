import { Button, Table } from "react-bootstrap";
import PaginacionControl from "./PaginacionControl";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";

const ListaFavoritos = ({
  paginate,
  currentPage,
  page,
  totalPosts,
  currentPosts
}) => {

  const {tokenUser, obtenerUsuarioFavoritos} = UserHook()
  const {formatPrecio, eliminarDeFavoritos} = ProductosHook()

  return (
    <>
      <div className="d-flex flex-column w-100">
        <h2 className="text-center">Favoritos</h2>
        <div className="mt-3">
          <Table
            striped
            bordered
            hover
            variant="white"
            className="container w-75"
          >
            <thead>
              <tr>
                <th className="text-center">Imagen</th>
                <th className="text-center">Producto</th>
                <th className="text-center">Stock</th>
                <th className="text-center">Precio</th>
                <th className="text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((product, index) => (
                <tr key={index}>
                  <td className="col-2 text-center td-favoritos">
                    <img
                      src={product.imagen}
                      alt=""
                      className="imagen-lista-productos img-fluid"
                    />
                  </td>
                  <td className="col-4 text-center td-favoritos">
                    {product.nombre}
                  </td>
                  <td className="col-3 text-center td-favoritos">
                    {product.stock}
                  </td>
                  <td className="col-2 text-center td-favoritos">
                    {formatPrecio(product.precio)}
                  </td>
                  <td className="col-1 text-center td-favoritos">
                    <Button
                      variant="danger"
                      onClick={() => {
                        eliminarDeFavoritos(product._id, tokenUser,obtenerUsuarioFavoritos);
                      }}
                    >
                      {" "}
                      x{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div>
          <PaginacionControl
            postsPerPage={page}
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default ListaFavoritos;
