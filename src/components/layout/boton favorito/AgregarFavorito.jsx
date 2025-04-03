import { Button } from "react-bootstrap"
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs"

const AgregarFavorito = ({agregarAFavorito}) =>{
    
    return (
        <Button variant="primary" className="boton-favorito" onClick={()=>{agregarAFavorito()}}>
            <BsSuitHeart className="corazon-vacio"/>
            <BsSuitHeartFill className="corazon-lleno"/>
        </Button>
    )
}

export default AgregarFavorito