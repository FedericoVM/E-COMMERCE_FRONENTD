import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "./Productos_categoria";

const Electrodomesticos = ({products}) => {
  const electrodomesticos = products.filter(productos => {
    return productos.categoria === "electrodomesticos"
  })
  console.log(electrodomesticos)
  return (
    <div className="">
        <div>
            <ProductosCategorias products={electrodomesticos}/>
        </div>
    </div>
  )
}

export default Electrodomesticos