import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "../Productos_categoria";


const Computacion = ({productos}) => {
    const [loading, setLoading] = useState(false);

    const productosComp = productos.filter(  p => {
     return  p.categoria === "Computacion"
    } )

  return (
    <div className="">
        <div className="">
            <ProductosCategorias productos={productosComp} loading={loading}/>
        </div>
    </div>
  )
}

export default Computacion