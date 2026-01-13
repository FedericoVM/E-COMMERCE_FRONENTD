import { Button } from "react-bootstrap"
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs"

const AgregarFavorito = ({agregarAFavorito}) =>{
    
    return (
        <Button variant="primary" className="boton-favorito-agregar" onClick={()=>{agregarAFavorito()}}>
            <BsSuitHeart className="corazon-vacio"/>
        </Button>
    )
}

export default AgregarFavorito