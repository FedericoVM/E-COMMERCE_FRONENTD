import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "./Productos_categoria";


const Computacion = ({products}) => {
  const computacion = products.filter(productos => {
    return productos.categoria === "computacion"
  })
  return (
    <div className="">
        <div className="">
            <ProductosCategorias products={computacion}/>
        </div>
    </div>
  )
}

export default Computacion