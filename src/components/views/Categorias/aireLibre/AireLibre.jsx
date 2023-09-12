import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "../Productos_categoria";

const AireLibre = ({productos}) => {
    const aireLibre = productos.filter(  p => {
      return  p.categoria === "Aire Libre"
     } )
  return (
    <div className="">
        <div className="">
          {productos.length > 0 ? <ProductosCategorias productos={aireLibre} card="categoria" /> :"" }  
        </div>
    </div>
  )
}

export default AireLibre