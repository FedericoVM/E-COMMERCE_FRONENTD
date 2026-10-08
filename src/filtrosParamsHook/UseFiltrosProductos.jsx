import { useSearchParams } from "react-router-dom"

const UseFiltrosProductos = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const categoria = searchParams.get("categoria") ?? undefined;
    const destacado = searchParams.get("destacado") === "true" || undefined;
    const search = searchParams.get("search") ?? undefined
    const pagina = parseInt(searchParams.get("pagina")) || 1;

    return {categoria, destacado, pagina, search}
}

export default UseFiltrosProductos