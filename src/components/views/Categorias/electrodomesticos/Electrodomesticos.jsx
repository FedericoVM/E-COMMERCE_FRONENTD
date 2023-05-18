import { useState } from "react";
import ProductosCategorias from "../Productos_categoria";

const Electrodomesticos = ({productos}) => {
    const [loading, setLoading] = useState(false);

    const productosElect = productos.filter(  p => {
     return  p.categoria === "Electrodomesticos"
    } )

    console.log(productosElect);
  return (
    <div className="">
        <div className="" >
            <ProductosCategorias productos={productosElect} loading={loading}/>
        </div>
    </div>
  )
}

export default Electrodomesticos