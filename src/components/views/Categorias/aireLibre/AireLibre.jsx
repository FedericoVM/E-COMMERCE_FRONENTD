import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "../Productos_categoria";

const AireLibre = ({productos}) => {
    const [loading, setLoading] = useState(false);
    const aireLibre = productos.filter(  p => {
      return  p.categoria === "Aire Libre"
     } )
  return (
    <div className="">
        <div className="">
            <ProductosCategorias productos={aireLibre} loading={loading}/>
        </div>
    </div>
  )
}

export default AireLibre