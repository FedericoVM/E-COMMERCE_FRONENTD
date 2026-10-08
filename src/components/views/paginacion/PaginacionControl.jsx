import { useSearchParams } from "react-router-dom";
import UseFiltrosProductos from "../../../filtrosParamsHook/UseFiltrosProductos"
import "./csspaginacion/paginationControl.css"
import UseHookMediaQuery from "../../layout/hookMediaQuery/UseHookMediaQuery";

const PaginacionControl = ({ totalPaginas }) => {

  const {categoria, destacado, pagina} = UseFiltrosProductos();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const paginaANavegar = (paginaNueva) =>{

    const nuevosParams = new URLSearchParams(searchParams)

    nuevosParams.set("pagina", String(paginaNueva))

    setSearchParams(nuevosParams)
  }

  return (
    <div className='container d-flex justify-content-center'>
      <nav className="d-flex justify-content-center mt-3">
        <ul className='pagination'>
          <li className='page-item' disabled={pagina <= 1 ? true : false}>
            <button onClick={() => paginaANavegar(1)} disabled={pagina <= 1 ? true : false} className='page-link pagination-boton-menos px-0 inicio-lista-admin'>
              {"|<<"}
            </button>
          </li>
          <li className={pagina <= 1 ? 'd-none' : 'page-itemr'}>
            <a onClick={() => paginaANavegar(pagina - 1)} className='page-link pagination-boton-anterior'>
              {pagina - 1}
            </a>
          </li>
          <li className='page-item'>
            <a onClick={() => paginaANavegar(pagina)} className={pagina ? 'pagina-actual page-link' : 'page-link'}>
              {pagina}
            </a>
          </li>
          <li className={pagina >= totalPaginas ? 'd-none' : 'page-item'}>
            <a onClick={() => paginaANavegar(pagina + 1)} className='page-link pagination-boton-posterior'>
              {pagina + 1}
            </a>
          </li>
          <li className='page-item' disabled={pagina >= totalPaginas ? true : false}>
            <button onClick={() => paginaANavegar(totalPaginas)} disabled={pagina >= totalPaginas ? true : false} className='page-link pagination-boton-mas px-0 inicio-lista-admin'>
              {">>|"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PaginacionControl