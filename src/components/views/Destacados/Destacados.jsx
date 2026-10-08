import UseHookMediaQuery from "../../layout/hookMediaQuery/UseHookMediaQuery";
import DestacadosEscritorioPag from "./escritorioMedia/DestacadosEscritorioPag";
import DestacadosMobilePag from "./mobileMedia/DestacadosMobilePag";
import DestacadosTabletPag from "./tabletMedia/DestacadosTabletPag";

const Destacados = ({ productosHome }) => {

  const { pantallaTablet, pantallaMobile } = UseHookMediaQuery();

  const Layout = pantallaMobile
    ? DestacadosMobilePag
    : pantallaTablet
      ? DestacadosTabletPag
      : DestacadosEscritorioPag;

  return (
    <div className="d-flex flex-column justify-content-start align-items-center col-12 mt-3">
      <h2 className="text-center align-self-center titulos-de-paginas m-0 rounded">
        Destacados
      </h2>
      {<Layout productos={productosHome}/>}
    </div>
  );
};

export default Destacados;
