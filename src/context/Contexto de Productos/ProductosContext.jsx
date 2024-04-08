import { useEffect, useState, useReducer } from "react";
import { UseProductos } from "./UseProductos";
import instance from "../../axios/instance";
import ProductoReducer from "./ProductoReducer";
import {
  FILTRAR_CARRITO_A_MOSTRAR,
  FILTRAR_FAVORITOS_A_MOSTRAR,
  RESET_CARRITO_Y_FAVORITOS
} from "./typesProductos";

const ProductosProvider = ({ children }) => {
  const [productosHome, setProductosHome] = useState([]);
  const [buscarProductos, setBuscarProductos] = useState(null)

  const initialStateProductContext = {
    productosCarritoAMostrar: null,
    productosFavoritosAMostrar: null,
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
      console.log(error);
    }
    productosHome;
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
              };
              resultado.push(productoCarrito);
            }
          });
        } else {
          let productoCarrito = {
            id: producto._id,
            imagen: "Eliminado",
            nombre: "Eliminado",
            precio: "Eliminado",
            cantidad: "Eliminado",
          };
          resultado.push(productoCarrito);
        }
      });
      dispatchProduct({ type: FILTRAR_CARRITO_A_MOSTRAR, payload: resultado });
    }
  };

  const agregarAlCarrito = async (productId, obtenerCarritoUsuario, tokenUser) => {
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
        console.log(resultado.data.mensaje);
        obtenerCarritoUsuario(tokenUser)
    } catch (error) {
       console.log(error)
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
    }
  };

  const agregarAFavoritos = async (productiId, obtenerUsuarioFavoritos, tokenUser) => {
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
      console.log(productoAgregado.data.mensaje);
      obtenerUsuarioFavoritos(tokenUser)
    } catch (error) {
      console.log(error)
    }
  }

  const cambiarBotonFavorito = (idProducto, user, favoritosUser, setState) => {
    if (user && favoritosUser) {
      if(favoritosUser.length > 0){
      setState(favoritosUser.some(element => {
        return element.productos === idProducto
      }))
    }
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
      console.log(resp.data.mensaje);
    } catch (error) {
      console.log(error);
    }
  };

  const resetCarritoYFavoritos = () => {
    dispatchProduct({type: RESET_CARRITO_Y_FAVORITOS, payload: initialStateProductContext})
  }

  const formatPrecio = (precio) => {
    let formatoARetornar = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precio)
    
    return formatoARetornar
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
        filtrarCarritoAMostrarProducto,
        agregarAlCarrito,
        filtrarFavoritosAMostrarProducto,
        agregarAFavoritos,
        eliminarDeFavoritos,
        cambiarBotonFavorito,
        resetCarritoYFavoritos,
        formatPrecio,
        buscarProductos,
        setBuscarProductos
      }}
    >
      {children}
    </UseProductos.Provider>
  );
};

export default ProductosProvider;
