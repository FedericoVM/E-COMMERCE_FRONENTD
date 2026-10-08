import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const FiltrosProductosAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [verPorCantidad, setVerPorCantidad] = useState(15);
  const [verPorCategoria, setVerPorCategoria] = useState("");
  const [verDestacados, setVerDestacados] = useState(false);
  const [verPorStock, setVerPortStock] = useState("")

  const filtrosProductos = (nombre, valor) => {
    const nuevosParams = new URLSearchParams(searchParams);

    if (valor) {
      nuevosParams.set(nombre, valor);
    } else {
      nuevosParams.delete(nombre);
    }

    if (nombre !== "pagina") nuevosParams.set("pagina", "1");

    setSearchParams(nuevosParams);
  };

  const calcularNuevoLimitePaginas = (
    limiteNuevo,
    paginaActual,
    limiteActual,
  ) => {
    const actualizarParams = new URLSearchParams(searchParams);

    const ultimoProductoVisto = paginaActual * limiteActual;

    if (Number(limiteNuevo) === 30) {
      
      const nuevaPagina = Math.ceil(ultimoProductoVisto / limiteNuevo);
      actualizarParams.set("pagina", String(nuevaPagina));
      actualizarParams.set("limite", String(limiteNuevo));
    } else {
      const nuevaPagina = Math.ceil((ultimoProductoVisto / 15)-1);
      actualizarParams.set("pagina", String(nuevaPagina));
      actualizarParams.set("limite", String(15));
    }
    setSearchParams(actualizarParams);
  };

  const cambiarLimite = (limite) => {
    const obtenerPagina = parseInt(searchParams.get("pagina")) || 1;
    const obtenerLimite = parseInt(searchParams.get("limite")) || 15;
    if (limite !== obtenerLimite) {
      calcularNuevoLimitePaginas(limite, obtenerPagina, obtenerLimite);
    }
  };

  const buscarProductoAdmin = (e) =>{
    
    e.preventDefault();

    const productoABuscar = e.target.search.value;

    if(productoABuscar.length > 3) {
      setVerPorCantidad(15);
      setVerPorCategoria("");
      setVerDestacados(false);
      setVerPortStock("");
      setSearchParams({search: String(productoABuscar)})
      } else {
        return toast.warning("Se necesitan mas caracteres")
      }
  }

  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={buscarProductoAdmin} className="d-flex align-self-center justify-content-center col-8 my-1">
        <input className="form-control mx-2 w-75" name="search" placeholder="Buscar Producto" type="text" />
      </Form>
      <div className="d-flex col-12 col-md-11 col-lg-9 flex-row my-2 justify-content-evenly">
        <div className="d-flex flex-column justify-content-evenly col-md-6 flex-md-row">
        <div className=" my-1 my-md-0">
          <label className="my-1 label-filtros-nombre-admin-productos">Ver por cantidad</label>
          <Form.Select
            value={verPorCantidad}
            onChange={(e) =>{
              setVerPorCantidad(e.target.value); 
              cambiarLimite(e.target.value)
              }
            }
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
          </Form.Select>
        </div>
        <div className="text-center">
          <label className="my-1 label-filtros-nombre-admin-productos">Ver por categorias</label>
          <Form.Select
            value={verPorCategoria}
            onChange={(e) => {
              setVerPorCategoria(e.target.value)
              filtrosProductos("categoria", e.target.value)
            }}
          >
            <option value="">Todas las categorias</option>
            <option value="Aire Libre">Aire Libre</option>
            <option value="Computacion">Computacion</option>
            <option value="Electrodomesticos">Electronicos</option>
          </Form.Select>
        </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-evenly col-md-6">
        <div className="text-center my-1 my-md-0">
          <label className="my-1 label-filtros-nombre-admin-productos">Ver solo destacados</label>
          <Form.Select
            value={verDestacados}
            onChange={(e) => {
              setVerDestacados(e.target.value)
              filtrosProductos("destacado", e.target.value)
            }}
          >
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </Form.Select>
        </div>
        <div className="text-center">
          <label className="my-1 label-filtros-nombre-admin-productos">Ver por stock</label>
          <Form.Select
            defaultValue={verPorStock}
            onChange={(e) => {
              setVerPortStock(e.target.value)
              filtrosProductos("stock", e.target.value)
            }}
          >
            <option value="">Default</option>
            <option value="-1">Mayor a Menor</option>
            <option value="1">Menor a Mayor</option>
          </Form.Select>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FiltrosProductosAdmin;
