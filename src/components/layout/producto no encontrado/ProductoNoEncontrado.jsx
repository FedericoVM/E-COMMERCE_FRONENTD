import "./productoNoEncontrado.css"

const ProductoNoEncontrado = () => {
    return (
            <section className="content-producto-no-encontrado d-flex align-items-center flex-column justify-content-center">
                <h1 className="titulo-pagina-producto-no-encontrado text-center">No se encontro el producto</h1>
            <img className="imagen-producto-no-encontrado col-sm-12 col-lg-8 col-md-10 d-none d-sm-block" src={import.meta.env.VITE_IMAGE_URL_PRODUCTO_NO_ENCONTRADO_SM}/>
            <img className="d-sm-none imagen-producto-no-encontrado col-12" src={import.meta.env.VITE_IMAGE_URL_PRODUCTO_NO_ENCONTRADO}/>
            </section>
    )
}

export default ProductoNoEncontrado