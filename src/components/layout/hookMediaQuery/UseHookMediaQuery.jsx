import { useState, useEffect } from "react"

const breackPoints = {
    pantallaMobile: "(max-width: 575px)",
    pantallaTablet: "(min-width: 576px) and (max-width: 991px)",
}

const UseHookMediaQuery = () => {

    const obtenerMatchQuerys = () => ({
        pantallaMobile: window.matchMedia(breackPoints.pantallaMobile).matches,
        pantallaTablet: window.matchMedia(breackPoints.pantallaTablet).matches,
    });

    const [mediaMatch, setMediaMatch] = useState(obtenerMatchQuerys);

    useEffect(() => {
        const mediaVentana = Object.values(breackPoints).map((query)=> window.matchMedia(query))
        
        const handler = () => setMediaMatch(obtenerMatchQuerys());

        mediaVentana.forEach((media)=> media.addEventListener("change", handler));

        return () => mediaVentana.forEach((media) => media.removeEventListener("change", handler))
    },[])

    return mediaMatch
}

export default UseHookMediaQuery