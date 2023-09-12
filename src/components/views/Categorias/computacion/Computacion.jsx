import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "../Productos_categoria";


const Computacion = ({productos}) => {
    

    const productosComp = productos.filter(  p => {
     return  p.categoria === "Computacion"
    } )

  return (
    <div className="">
        <div className="">
        {productos.length > 0 ? <ProductosCategorias productos={productosComp} card="categoria" /> :"" }  
        </div>
    </div>
  )
}

export default Computacion