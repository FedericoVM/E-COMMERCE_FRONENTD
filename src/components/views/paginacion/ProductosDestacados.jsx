import { Col, Row } from "react-bootstrap";
import PaginacionControl from "../paginacion/PaginacionControl";
import DestacadoCards from "../Destacados/DestacadoCards";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import CargandoProductos from "../../layout/cargando productos/CargandoProductos";

const ProductosDestacados = ({
  currentPostsMd,
  currentPostsSm,
  page,
  totalPosts,
  currentPosts,
}) => {
  const {
    currentPageWeb,
    paginateWeb,
    currentPageTablet,
    paginateTablet,
    currentPageMobile,
    paginateMobile,
  } = ProductosHook();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex d-none col-11 justify-content-center d-lg-block">
        <Row lg={3} className="d-flex justify-content-center m-0 col-12 g-4">
          {currentPosts.length > 0
            ? currentPosts.map((post, idx) => (
                <Col key={idx}>
                  <DestacadoCards post={post} />
                </Col>
              ))
            : <CargandoProductos/>}
          {currentPosts.length > 0 && <div className="d-flex justify-content-center">
            <PaginacionControl
              postsPerPage={page}
              totalPosts={totalPosts}
              paginate={paginateWeb}
              currentPage={currentPageWeb}
            />
          </div>}
        </Row>
      </div>
      <div className="d-none d-flex justify-content-center d-sm-block d-lg-none col-12">
        <Row md={3} sm={2} className="col-12 m-0 g-4">
          {currentPostsMd.length > 0
            ? currentPostsMd.map((post, idx) => (
                <Col key={idx}>
                  <DestacadoCards post={post} />
                </Col>
              ))
            : <CargandoProductos/>}
          {currentPostsMd.length > 0 && <div className="w-100 d-flex justify-content-center align-items-center">
            <PaginacionControl
              postsPerPage={page}
              totalPosts={totalPosts}
              paginate={paginateTablet}
              currentPage={currentPageTablet}
            />
          </div>}
        </Row>
      </div>
      <div className="d-block w-100 d-flex justify-content-center d-sm-none">
        <Row className=" w-100 g-4">
          {currentPostsSm.length > 0
            ? currentPostsSm.map((post, idx) => (
                <Col sm={10} md={10} key={idx}>
                  <DestacadoCards post={post} />
                </Col>
              ))
            : <CargandoProductos/>}
          {currentPostsMd.length > 0 && <div className="d-flex justify-content-center align-items-center">
            <PaginacionControl
              postsPerPage={page}
              totalPosts={totalPosts}
              paginate={paginateMobile}
              currentPage={currentPageMobile}
            />
          </div>}
        </Row>
      </div>
    </div>
  );
};

export default ProductosDestacados;
