import { Button } from "react-bootstrap";
import { BsSuitHeartFill } from "react-icons/bs";

const ContenidoPaginaProducto = ({ productoAMostrar }) => {

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center flex-md-row my-2 col-12 justify-content-evenly">
        <div className="imagen-pagina-producto col-md-6 mb-4 mb-md-0 border rounded">
        <img
          src={`${productoAMostrar.imagen}`}
          className="imagen-pagina-producto"
        />
        <Button variant="primary" className="boton-favorito">
          <BsSuitHeartFill/>
        </Button>
        </div>
        <div className="col-md-5 d-flex align-items-center flex-column justify-content-center">
          <h3 className="text-center my-2 col-10">{productoAMostrar.nombre}</h3>
          <br className="d-none d-md-block" />
          <div className="d-flex flex-column-reverse flex-md-column col-12">
          <div className="col-12 d-flex flex-row justify-content-start align-items-center">
            <div className="d-flex flex-column col-4">
              <h5 className="text-center">Marca:</h5>
              <h5 className="text-center">{productoAMostrar.marca}</h5>
            </div>
            <div className="d-flex flex-column col-4">
              <h5 className="text-center">Categoria:</h5>
              <h5 className="text-center">
                {productoAMostrar.categoria}
              </h5>
            </div>
            <div className="d-flex flex-column col-4">
              <h5 className="text-center">Stock:</h5>
              <h5 className="text-center">{productoAMostrar.stock}</h5>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row col-12 justify-content-evenly align-items-center">
            <p className="precio-pagina-producto col-md-7 align-self-center text-center">
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(productoAMostrar.precio)}
            </p>
            <div className="d-flex flex-row flex-md-column justify-content-evenly col-12 col-sm-10 col-md-4 mb-4">
                <Button variant="success my-md-2  ">Agregar al Carrito</Button>
                <Button className="my-md-2 fs-5 ">Comprar</Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPaginaProducto;
