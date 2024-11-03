import "./favoritosVacio.css"

const FavoritosVacio = () =>{
    return (
        <div className="d-flex flex-column col-10 justify-content-center align-items-center">
            <h1>Favoritos</h1>
            <div className="d-flex justify-content-center bg-black contenedor-imagen-favorito-vacio">
            <img className="img-fluid" src={`${import.meta.env.VITE_IMAGE_URL_FAVORITOS_VACIO}`} alt="Lista Vacia" />
            </div>
        </div>
    )
}

export default FavoritosVacio