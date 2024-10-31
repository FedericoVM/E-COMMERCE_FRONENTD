import "./publicidad.css"

const Publicidad = () =>{
    return (
        <div className="col-12 d-flex flex-column justify-content-evenly align-items-center h-100">
            <a href="https://www.google.com.ar" target="_blank">
            <img className="imagen-1-publicidad"  src={import.meta.env.VITE_IMG_PUBLICIDAD_1}/>
            </a>
            <a href="https://www.google.com.ar" target="_blank">
            <img className="imagen-2-publicidad" src={import.meta.env.VITE_IMG_PUBLICIDAD_2}/>
            </a>
        </div>
    )
}

export default Publicidad