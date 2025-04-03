import { useEffect, useState } from "react";
import ProductosCategorias from "../Productos_categoria";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import CargandoProductos from "../../../layout/cargando productos/CargandoProductos";

const Electrodomesticos = ({productos}) => {

  const [electrodomesticoProductos, setElectrodomesticoProductos] = useState([])
  
  const {filtrarProductosCategoria} = ProductosHook()

  useEffect(()=>{
    filtrarProductosCategoria(productos, setElectrodomesticoProductos, "Electrodomesticos")
  }, [productos])

  return (
    <div>
        <div className="min-vh-100" >
        {electrodomesticoProductos.length > 0 ? <ProductosCategorias productos={electrodomesticoProductos} card="categoria" categoria={"Electrodomesticos"}/> : <CargandoProductos/> }  
        </div>
    </div>
  )
}

export default Electrodomesticos