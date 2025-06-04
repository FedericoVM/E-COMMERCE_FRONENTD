import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook"
import ListaDeHistorial from "./ListaDeHistorial"
import HistorialVacio from "./HistorialVacio"

const HistorialDeCompras = () =>{

    const{usuarioHistorialCompras} = UserHook()

    return (
        <div className="col-12 m-0 componente-respuesta-historial-compras h-100 d-flex justify-content-center align-items-center p-lg-3">
            {usuarioHistorialCompras.length > 0 ? <ListaDeHistorial/>: <HistorialVacio/>}
        </div>
    )
}

export default HistorialDeCompras