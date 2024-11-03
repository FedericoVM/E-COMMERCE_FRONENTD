import "./carritoVacio.css"

const CarritoVacio = () =>{
    return (
        <div className="col-12 d-flex justify-content-center">
            <img className="img-fluid carrito-vacio" src={`${import.meta.env.VITE_IMAGE_URL_CARRITO_VACIO}`}/>
        </div>
    )
}

export default CarritoVacio