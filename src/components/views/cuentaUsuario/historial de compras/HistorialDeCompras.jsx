import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook"
import ListaDeHistorialTabs from "./ListaDeHistorialTabs"
import HistorialVacio from "./HistorialVacio"

const HistorialDeCompras = () =>{

    const{usuarioHistorialCompras} = UserHook()

    return (
        <div className="col-12 m-0 componente-respuesta-historial-compras d-flex justify-content-center align-items-center p-lg-1">
            {usuarioHistorialCompras.length > 0 ? <ListaDeHistorialTabs/>: <HistorialVacio/>}
        </div>
    )
}

export default HistorialDeCompras