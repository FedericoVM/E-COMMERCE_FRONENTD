import "./carritoVacio.css"
import carritoVacio from '../../../../assets/img/carrito-vacio/carritoVacioEdit.jpg'

const CarritoVacio = () =>{
    return (
        <div className="col-12 d-flex justify-content-center">
            <img className="img-fluid carrito-vacio" src={carritoVacio}/>
        </div>
    )
}

export default CarritoVacio