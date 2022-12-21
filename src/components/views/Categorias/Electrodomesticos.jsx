import { useState, useEffect } from "react";
import axios from "axios";
import ProductosCategorias from "./Productos_categoria";

const Electrodomesticos = () => {
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
      }, []);
    
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        setTest(res.data);
        setLoading(false);
      };

  return (
    <div className="">
        <div className="">
            <ProductosCategorias productos={test} loading={loading}/>
        </div>
    </div>
  )
}

export default Electrodomesticos