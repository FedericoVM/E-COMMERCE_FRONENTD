import "./cargandoProductos.css"

const CargandoProductos = () =>{
    return (
        <section className="body-cargando-productos d-flex justify-content-center">
            <img className="imagen-cargando-productos d-none d-md-block" src={import.meta.env.VITE_IMAGE_URL_CARGANDO_PRODUCTO_MD}/>
            <img className="imagen-cargando-productos col-12 col-sm-10 d-md-none" src={import.meta.env.VITE_IMAGE_URL_CARGANDO_PRODUCTO_SM}/>
        </section>
    )
}

export default CargandoProductos