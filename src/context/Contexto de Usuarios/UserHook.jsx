import { useContext } from "react";
import { UseUser } from "./UseUser";

export const UserHook = () => {
    const contextUser = useContext(UseUser);
    if (!contextUser) throw new Error("User Provider no encontrado");
    return contextUser
}