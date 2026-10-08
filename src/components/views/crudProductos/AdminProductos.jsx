import instanceFormData from "../../../axios/instanceFormData";
import { useState } from "react";
import Paginacion from "../paginacion/Paginacion";
import FormikComponente from "../Formik Componente/FormikComponenteProductos";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { toast } from "sonner";
import { Accordion } from "react-bootstrap";
import ApiQueryHook from "../../../queryApi/ApiQueryHook";
import FiltrosProductosAdmin from "./FiltrosProductosAdmin";
import { useSearchParams } from "react-router-dom";
import UseFiltrosProductos from "../../../filtrosParamsHook/UseFiltrosProductos";
import TablaGrandeAdmin from "./tablasDeProductos/tablaGrande/TablaGrandeAdmin";
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";
import PaginacionControl from "../paginacion/PaginacionControl";
import "./adminProductosstyle.css";

const AdminProductos = () => {
  const { tokenUser, setBotonBloquear } = UserHook();
  const { productosHome, obtenerProductos } = ProductosHook();
  const { categoria, destacado, pagina, search} = UseFiltrosProductos();
  const [searchParams, setSearchParams] = useSearchParams();

  const limiteProductosUI = [15, 30];
  const limiteUrl = parseInt(searchParams.get("limite")) || 15;
  const limiteFinal = limiteProductosUI.includes(limiteUrl) ? limiteUrl : 15;
  const stock = parseInt(searchParams.get("stock"))|| undefined

  const { data, isLoading, error } = ApiQueryHook({
    pagina: pagina,
    limite: limiteFinal,
    categoria: categoria,
    destacado: destacado,
    admin: true,
    stock: stock,
    search: search
  });

  let mostrarBarra = true;

  const [arrayBuscar, setArrayBuscar] = useState(null);

  const crearProducto = async (values) => {
    setBotonBloquear(true);

    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    };

    let destacado;
    values.destacarProducto === "Si" ? (destacado = true) : (destacado = false);

    const formData = new FormData();

    formData.append("nombre", values.nombreProducto);
    formData.append("marca", values.marcaProducto);
    formData.append("stock", values.stockProducto);
    formData.append("precio", values.precioProducto);
    formData.append("categoria", values.categoriaProducto);
    formData.append("imagen", values.imagenProducto);
    formData.append("descripcion", values.descripcionProducto);
    formData.append("destacado", destacado);
    formData.append("descuento", values.descuento);

    try {
      const resp = await instanceFormData.post("/productos", formData, config);
      obtenerProductos();
      setBotonBloquear(false);
      toast.success(resp.data.msg);
    } catch (error) {
      setBotonBloquear(false);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center titulos-de-paginas">Administrar Productos</h1>
      <hr className="col-12 col-sm-10" />
      <div className="col-11 col-sm-12 d-flex justify-content-center">
        <Accordion className="col-11 col-lg-8">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Agregar Producto</Accordion.Header>
            <Accordion.Body>
              <FormikComponente onSubmit={crearProducto} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <hr className="col-12 col-sm-10"/>
      <div className="d-flex flex-column col-12 col-sm-11 justify-content-center align-items-center">
      <FiltrosProductosAdmin/>
      {!isLoading ? <TablaGrandeAdmin productos={data.productos}/> : <CargandoProductos/>}
      {!isLoading && <PaginacionControl totalPaginas={data.totalPaginas} paginaActual={pagina}/>}
      </div>
    </div>
  );
};

export default AdminProductos;
