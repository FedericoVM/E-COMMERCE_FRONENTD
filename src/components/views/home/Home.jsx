import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CarouselHome from "./carouselHome/CarouselHome";
import Publicidad from "./Publicidad/Publicidad";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";
import { useSearchParams } from "react-router-dom";
import PaginacionControl from "../paginacion/PaginacionControl";
import UseHookMediaQuery from "../../layout/hookMediaQuery/UseHookMediaQuery";
import ProductoNoEncontrado from "../../layout/producto no encontrado/ProductoNoEncontrado";
import PaginaAMostrarProductos from "../paginacion/contenedor de pagina a mostrar/PaginaAmostrarProductos";
import ApiQueryHook from "../../../queryApi/ApiQueryHook";
import UseFiltrosProductos from "../../../filtrosParamsHook/UseFiltrosProductos";

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { pantallaTablet, pantallaMobile } = UseHookMediaQuery();
  const {categoria, destacado, pagina, search} = UseFiltrosProductos()
  
  const limite = pantallaMobile ? 10 : pantallaTablet ? 12 : 15;

  const paginaUno = () => {
    
    const paramsPag = new URLSearchParams(searchParams);

    paramsPag.set("pagina", String(1))

    setSearchParams(paramsPag)
  };

  const {data, isLoading, error} = ApiQueryHook({pagina, limite, categoria, destacado, search})

  useEffect(() => {
    paginaUno(1)
  }, [limite]);

  return (
    <>
      <div className="d-none d-sm-block">
        <CarouselHome />
      </div>
      <div>
        <Row className=" mx-0 d-flex">
          <Col lg={destacado ? 12 : 10}>
            {!isLoading ? (
              <PaginaAMostrarProductos destacado={destacado} productosHome={data.productos} />
            ) : (
              <CargandoProductos />
            )}
            {error || data?.productos?.length == 0 && <ProductoNoEncontrado/>}
            {!isLoading && data?.productos?.length > 0 && (
              <PaginacionControl
                totalPaginas={data.totalPaginas}
              />
            )}
          </Col>
          <Col lg={!destacado && 2} className={destacado ? "d-none":"d-none d-lg-inline publicidad"}>
            <Publicidad />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
