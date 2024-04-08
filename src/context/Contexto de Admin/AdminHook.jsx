import { useContext } from "react";
import { UseAdmin } from "./UseAdmin";

export const AdminHook = () => {
    const contextAdmin = useContext(UseAdmin);
    if (!contextAdmin) throw new Error("User Provider no encontrado");
    return contextAdmin
}