import { useEffect, useState } from "react";
import { UseProductos } from "./UseProductos";
import instance from "../../axios/instance";
import {toast} from "sonner"

const ProductosProvider = ({ children }) => {
  
  const [productosHome, setProductosHome] = useState([]);
  const [buscarProductos, setBuscarProductos] = useState(null);
  const [currentPageWeb, setCurretPageWeb] = useState(1);
  const [currentPageTablet, setCurretPageTablet] = useState(1);
  const [currentPageMobile, setCurretPageMobile] = useState(1);
  const [errorMercado, setErrorMercado] = useState(null);
  const [modalCompraCard, setModalCompraCard] = useState(false);
  const [bloquearCarritoBotones, setBloquearCarritoBotones] = useState(false)
  const [productoAComprar, setProductoAComprar] = useState('')

  const paginateWeb = (pageNumber) =>{
    setCurretPageWeb(pageNumber)
  }

  const paginateTablet = (pageNumber) =>{
    setCurretPageTablet(pageNumber)
  }

  const paginateMobile = (pageNumber) =>{
    setCurretPageMobile(pageNumber)
  }

  const obtenerProductos = async () => {
    try {
      const res = await instance.get("/productos");
      setProductosHome(res.data.toReversed());
    } catch (error) {
      toast.error(error.data.msg);
    }
  };


  const agregarAlCarrito = async (productId, obtenerCarritoUsuario, tokenUser, usuarioEnLinea) => {
    if(usuarioEnLinea === false) {
      return toast.warning("Tiene que iniciar sesion")
    }
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`
      }
    }
  
  const nuevoProductoCarrito = {
    idProducto: productId
  }

    try {
        let resultado = await instance.post("/carrito/",nuevoProductoCarrito,config)
        obtenerCarritoUsuario(tokenUser)
        toast.success(resultado.data.mensaje)
    } catch (error) {
      console.log(error);
      
       toast.error(error.data.mensaje)
    }
  }

  const agregarAFavoritos = async (productiId, obtenerUsuarioFavoritos, tokenUser, usuarioEnLinea) => {

    if(usuarioEnLinea === false) {
      return toast.warning("Tiene que iniciar sesion")
    }
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`
      }
    }

    const nuevoProductoFav = {
      productos: productiId
    }

    try {
      let productoAgregado = await instance.post("/favoritos",nuevoProductoFav,config);
      toast.success(productoAgregado.data.mensaje);
      obtenerUsuarioFavoritos(tokenUser)
    } catch (error) {
      toast.error(error.data.mensaje)
    }
  }

  const eliminarDeFavoritos = async (idProducto, tokenUser, obtenerUsuarioFavoritos) => {

    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    try {
      let resp = await instance.delete(`/favoritos/${idProducto}`, config);
      obtenerUsuarioFavoritos(tokenUser)
      toast.success(resp.data.mensaje);
    } catch (error) {
      toast.error(error.response.data.mensaje);
    }
  };

  const comprarProducto = async ({idProducto, tokenUser, navigate, setState}) =>{
    if(!tokenUser){
      return toast.warning('Tiene que iniciar sesion')
    }

    setModalCompraCard(true)

    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`
      }
    }
    const productoAComprar = {
      producto_id : idProducto
    }

    try {
      const pago = await instance.post("/mercadoPago/crear-producto-payment-order",productoAComprar, config)
        setErrorMercado(null)
        setModalCompraCard(false)
        setProductoAComprar(pago.data.producto)
      if (pago && navigate) navigate(`/completar-pago/${pago.data.producto._id}`)
      if (setState) setState(true)

    } catch (error) {
      if(setState) setState(true)
      setErrorMercado(error.response)
    }
  } 

  const formatPrecio = (precio) => {
    let formatoARetornar = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precio)
    return formatoARetornar.replace(/\s/g, "")
  }

  const formatPrecioDescuento = (precio, descuento, cantidad = 1) =>{

    let precioDescuento = 0;
    
    if (descuento < 10 ) {
      precioDescuento =+ (precio-(precio * Number(`0.0${descuento}`))) * cantidad
    } else { 
      precioDescuento =+ (precio-(precio * Number(`0.${descuento}`))) * cantidad
    }
    
    let precioARetornar = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precioDescuento)
    
    return precioARetornar.replace(/\s/g, "")
  }
  
  const filtrarProductosCategoria = ( productos, setProductos, categoria) =>{

    const categoriaProducto = productos.filter(p =>{
      return p.categoria === categoria
    })

    return setProductos(categoriaProducto)
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <UseProductos.Provider
      value={{
        productosHome,
        obtenerProductos,
        filtrarProductosCategoria,
        agregarAlCarrito,
        agregarAFavoritos,
        eliminarDeFavoritos,
        formatPrecio,
        formatPrecioDescuento,
        buscarProductos,
        setBuscarProductos,
        currentPageWeb,
        currentPageTablet,
        currentPageMobile,
        paginateWeb,
        paginateTablet,
        paginateMobile,
        comprarProducto,
        errorMercado,
        setErrorMercado,
        modalCompraCard,
        setModalCompraCard,
        setBloquearCarritoBotones,
        bloquearCarritoBotones,
        productoAComprar
      }}
    >
      {children}
    </UseProductos.Provider>
  );
};

export default ProductosProvider;
