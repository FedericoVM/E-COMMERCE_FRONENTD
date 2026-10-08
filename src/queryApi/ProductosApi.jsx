import instance from "../axios/instance";

export const getProductos = async({pagina, limite, categoria, destacado, admin, tokenUser, stock, search}) =>{

    const params = {pagina, limite, categoria, destacado, admin, stock, search};

    const dataQueryGet = await instance.get('/navegacion/productos',{params,
        headers: tokenUser ? { Authorization: `Bearer ${tokenUser}`}: {}
    });

    return dataQueryGet.data
}