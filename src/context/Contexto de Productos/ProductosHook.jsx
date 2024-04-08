import { useContext } from "react";
import { UseProductos } from "./UseProductos";

export const ProductosHook = () => {
    const contextProducto = useContext(UseProductos);
    if (!contextProducto) throw new Error("Productos Provider no encontrado");
    return contextProducto
}