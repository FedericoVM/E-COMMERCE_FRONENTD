import Destacados from "../../Destacados/Destacados"
import ContenedorPaginasMedia from "../mediaComponentes/ContenedorPaginasMedia"


const PaginaAMostrarProductos = ({destacado, productosHome}) => {
    return (
    <div>
        {destacado ? <Destacados productosHome={productosHome}/> : <ContenedorPaginasMedia productosHome={productosHome}/>}
    </div>
    )
}

export default PaginaAMostrarProductos