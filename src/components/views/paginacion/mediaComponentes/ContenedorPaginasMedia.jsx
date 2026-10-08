import UseHookMediaQuery from "../../../layout/hookMediaQuery/UseHookMediaQuery";
import ComponentePaginaEscritorio from "./escritorioComponente/ComponentePaginaEscritorio";
import ComponentePaginaMobile from "./mobileComponente/ComponentePaginaMobile";
import ComponentePaginaTablet from "./tabletComponente/ComponentePaginaTablet";

const ContenedorPaginasMedia = ({productosHome}) => {
  const { pantallaMobile, pantallaTablet } = UseHookMediaQuery();

  const LayoutMedia = pantallaMobile
    ? ComponentePaginaMobile
    : pantallaTablet
      ? ComponentePaginaTablet
      : ComponentePaginaEscritorio;

  return (
    <div>
        <LayoutMedia productosHome={productosHome}/>
    </div>
  );
};

export default ContenedorPaginasMedia