import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { UserHook } from "../context/Contexto de Usuarios/UserHook";
import { getProductos } from "./ProductosApi";

const ApiQueryHook = ({
  pagina = 1,
  limite = 15,
  categoria = undefined,
  destacado,
  admin = false,
  stock = undefined,
  search = undefined
}) => {

    const {tokenUser, usuarioEnLinea} = UserHook()
   
  return  useQuery({
    queryKey: ["productos", {pagina, limite, categoria, destacado, admin, usuarioEnLinea, stock, search}],
    queryFn: () => getProductos({pagina, limite, categoria, destacado, tokenUser, admin, stock, search}),
    staleTime: 0,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData
  });
};

export default ApiQueryHook