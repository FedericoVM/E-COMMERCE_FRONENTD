import { Button, Table } from "react-bootstrap";
import PaginacionControl from "./PaginacionControl";
import instance from "../../../axios/instance";

const ListaFavoritos = ({
  paginate,
  currentPage,
  page,
  totalPosts,
  currentPosts,
  token,
  verFavoritos,
  
}) => {



  const eliminarFavoritos = async (idProducto) => {

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      let resp = await instance.delete(`/favoritos/${idProducto}`, config);
      verFavoritos(token)
      console.log(resp.data.mensaje);
    } catch (error) {
      console.log(error);
    }
  };

 

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
                    $ {product.precio}
                  </td>
                  <td className="col-1 text-center td-favoritos">
                    <Button
                      variant="danger"
                      onClick={() => {
                        eliminarFavoritos(product._id);
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
