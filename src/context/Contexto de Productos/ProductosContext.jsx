import { useEffect, useState, useReducer, useMemo } from "react";
import { UseProductos } from "./UseProductos";
import instance from "../../axios/instance";
import ProductoReducer from "./ProductoReducer";
import {toast} from "sonner"
import {
  FILTRAR_CARRITO_A_MOSTRAR,
  FILTRAR_FAVORITOS_A_MOSTRAR,
  RESET_CARRITO_Y_FAVORITOS
} from "./typesProductos";

const ProductosProvider = ({ children }) => {
  
  const [productosHome, setProductosHome] = useState([]);
  const [buscarProductos, setBuscarProductos] = useState(null);
  const [currentPageWeb, setCurretPageWeb] = useState(1);
  const [currentPageTablet, setCurretPageTablet] = useState(1);
  const [currentPageMobile, setCurretPageMobile] = useState(1);
  const [errorMercado, setErrorMercado] = useState(null);
  const [modalCompraCard, setModalCompraCard] = useState(false)

  const paginateWeb = (pageNumber) =>{
    setCurretPageWeb(pageNumber)
  }

  const paginateTablet = (pageNumber) =>{
    setCurretPageTablet(pageNumber)
  }

  const paginateMobile = (pageNumber) =>{
    setCurretPageMobile(pageNumber)
  }

  const initialStateProductContext = {
    productosCarritoAMostrar: [],
    productosFavoritosAMostrar: [],
  };

  const [state, dispatchProduct] = useReducer(
    ProductoReducer,
    initialStateProductContext
  );

  const obtenerProductos = async () => {
    try {
      const res = await instance.get("/productos");
      setProductosHome(res.data.toReversed());
    } catch (error) {
      toast.error(error.data.msg);
    }
  };

  const filtrarCarritoAMostrarProducto = (carrito, productos) => {
    let resultado = [];

    if (carrito.length > 0) {
      carrito.forEach((producto) => {
        let productosExistentes = productos.some((prod) => {
          return prod._id === producto.productos;
        });

        if (productosExistentes) {
          productos.find((c) => {
            if (producto.productos === c._id) {
              let productoCarrito = {
                id: producto._id,
                imagen: c.imagen,
                nombre: c.nombre,
                precio: c.precio,
                stock: c.stock,
                cantidad: producto.cantidad,
                idProducto: c._id
              };
              resultado.push(productoCarrito);
            }
          });
        } else {
          let productoCarrito = {
            id: producto._id,
            imagen: "No Disponible",
            nombre: "No Disponible",
            precio: "No Disponible",
            cantidad: 0,
            stock: "No Disponible",
            idProducto: producto._id
          };
          resultado.push(productoCarrito);
        }
      });
      dispatchProduct({ type: FILTRAR_CARRITO_A_MOSTRAR, payload: resultado });
    } else {
      dispatchProduct({ type: FILTRAR_CARRITO_A_MOSTRAR, payload: resultado})
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
    productos: productId
  }

    try {
        let resultado = await instance.post("/carrito/",nuevoProductoCarrito,config)
        obtenerCarritoUsuario(tokenUser)
        toast.success(resultado.data.mensaje)
    } catch (error) {
       toast.error(error.data.mensaje)
    }
  }

  const filtrarFavoritosAMostrarProducto = (productos, favoritos) => {
    let resultado = [];

    if (favoritos.length > 0) {
      productos.forEach((p) => {
        favoritos.find((favorito) => {
          if (p._id === favorito.productos) {
            resultado.push(p);
          }
        });
      });
      dispatchProduct({ type: FILTRAR_FAVORITOS_A_MOSTRAR, payload: resultado });
    } else {
      dispatchProduct({type: FILTRAR_FAVORITOS_A_MOSTRAR, payload: resultado})
    }
  };

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

  const cambiarBotonFavorito = useMemo(()=>{
    return (usuarioEnLinea, productosFavoritosAMostrar, idProducto) =>{
      if(usuarioEnLinea && productosFavoritosAMostrar.length > 0) {
        return productosFavoritosAMostrar.some(e => e._id === idProducto)
      }
      return false
    }
  },[state.productosFavoritosAMostrar])

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

  const resetCarritoYFavoritos = () => {
    dispatchProduct({type: RESET_CARRITO_Y_FAVORITOS, payload: initialStateProductContext})
  }

  const comprarProducto = async (idProducto, tokenUser) =>{

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
      const pago = await instance.post("/mercadoPago/payment",productoAComprar, config)
      if (pago) {
        window.location.href = `${pago.data.redirecttUrl}`
      }
    } catch (error) {
      setErrorMercado(error.response)
    }
  } 

  const formatPrecio = (precio) => {
    let formatoARetornar = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precio)
    return formatoARetornar
  }

  const formatPrecioDescuento = (productos, productoId, cantidad = 1) =>{
    let precioDescuento = 0;
    let descuento = 0;

    const encontrarProducto = productos.find((element)=>{
      return element._id === productoId
    })
    
    if (encontrarProducto.descuento < 10 ) {
      descuento =+ Number(`0.0${encontrarProducto.descuento}`)
    } else { 
      descuento =+ Number(`0.${encontrarProducto.descuento}`)
    }

    precioDescuento =+ (encontrarProducto.precio - (encontrarProducto.precio * descuento)) * cantidad
    
    let precioARetornar = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precioDescuento)
    
    return precioARetornar
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
        productosCarritoAMostrar: state.productosCarritoAMostrar,
        productosFavoritosAMostrar: state.productosFavoritosAMostrar,
        productosHome,
        setProductosHome,
        obtenerProductos,
        filtrarProductosCategoria,
        filtrarCarritoAMostrarProducto,
        agregarAlCarrito,
        filtrarFavoritosAMostrarProducto,
        agregarAFavoritos,
        eliminarDeFavoritos,
        cambiarBotonFavorito,
        resetCarritoYFavoritos,
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
        setModalCompraCard
      }}
    >
      {children}
    </UseProductos.Provider>
  );
};

export default ProductosProvider;
