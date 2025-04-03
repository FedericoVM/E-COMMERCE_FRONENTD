import { Button } from "react-bootstrap"
import { BsSuitHeartFill } from "react-icons/bs"

const EliminarFavorito = ({eliminarFavorito}) =>{
    return (
        <Button variant="primary" className="boton-favorito" onClick={()=>{eliminarFavorito()}}>
            <BsSuitHeartFill/>
        </Button>
    )
}

export default EliminarFavorito