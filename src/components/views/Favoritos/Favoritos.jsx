import { useState, useEffect } from "react";
import instance from "../../../axios/instance";
import Paginacion from "../paginacion/Paginacion";

const Favoritos = ({ token, listaProductos, datosUsuario }) => {

  const [favoritos, setFavoritos] = useState([]);
  const [listaFavoritos, setListaFavoritos] = useState([])

  const filtrarFavoritos = (array1, array2) => {

    let resultado = [];

    if (array2.length > 0) {
      array1.forEach(p => {

        array2.find((favorito) => {
          if (p._id === favorito.productos) {
            resultado.push(p)
          }

        })
      })

      setListaFavoritos(resultado)
    }


  }

  const verFavoritos = async (token) => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    try {
      const resp = await instance.get("/favoritos", config);
      setFavoritos(resp.data);

    } catch (error) {
      return console.log(error);
    }

  }






  useEffect(() => {

    verFavoritos(token);

  }, [])


  useEffect(() => {
    filtrarFavoritos(listaProductos, favoritos)
  }, [favoritos])



  return (
    <div className="">
      {favoritos.length > 0 ? <Paginacion lista={listaFavoritos} card="favoritos" token={token} verFavoritos={verFavoritos} datosUsuario={datosUsuario} /> : <p>NO hay productos agregados al favorito</p>}
    </div>
  );
};

export default Favoritos;