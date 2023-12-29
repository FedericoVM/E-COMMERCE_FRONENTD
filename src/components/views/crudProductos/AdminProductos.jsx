import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import instanceFormData from "../../../axios/instanceFormData";
import instance from "../../../axios/instance";
import { useEffect, useState } from "react";
import Paginacion from "../paginacion/Paginacion";

const AdminProductos = ({ productos, token, setProductos, verProductos }) => {

  let mostrarBarra = true



  const [arrayBuscar, setArrayBuscar] = useState([]);





  const crearProducto = async (e) => {

    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let codigo = e.target.codigoProducto.value;
    let nombre = e.target.nombreProducto.value;
    let marca = e.target.marcaProducto.value;
    let stock = e.target.stockProducto.value;
    let precio = e.target.precioProducto.value;
    let categoria = e.target.categoriaProducto.value;
    let imagen = e.target.imagen.files[0];
    let descripcion = e.target.descripcionProducto.value;
    let destacado;
    e.target.destacarProducto.value === "Si"
      ? (destacado = true)
      : (destacado = false);

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("codigo", codigo);
    formData.append("marca", marca);
    formData.append("stock", stock);
    formData.append("precio", precio);
    formData.append("categoria", categoria);
    formData.append("imagen", imagen);
    formData.append("descripcion", descripcion);
    formData.append("destacado", destacado);

    try {
      const resp = await instanceFormData.post("/productos", formData, config);
      verProductos();
        console.log(resp.data.msg);
    } catch (error) {
      console.log(error.response.data.msg);
    }


  };

  useEffect(() => {
    verProductos()
  }, [])


  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center">Administrar Productos</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <Form className=" col-11 col-md-8" onSubmit={crearProducto}>
          <Form.Label>Codigo</Form.Label>
          <Form.Control
            type="text"
            name="codigoProducto"
            placeholder="El codigo se genera de manera automatica"
            className="input mb-3"
            disabled={true}
            value={Date.now()}
          />
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            name="nombreProducto"
            placeholder="PC Gamer"
            className="input mb-3"

          />
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            name="marcaProducto"
            placeholder="Sony"
            className=" input mb-3"
          />
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="text"
            name="stockProducto"
            placeholder="24"
            className="input mb-3"
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            name="precioProducto"
            placeholder="24.499"
            className="input mb-3"
          />
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            defaultValue="Seleccione categoria"
            name="categoriaProducto"
            className="input"

          >
            <option disabled={true}>Seleccione categoria</option>
            <option>Electrodomesticos</option>
            <option>Computacion</option>
            <option>Aire Libre</option>
          </Form.Select>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Foto del producto</Form.Label>
            <Form.Control type="file" name="imagen" />
          </Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as="textarea"
            name="descripcionProducto"
            rows={3}
            placeholder="Descripcion"
            className="input mb-1"
          />
          <Form.Label>Producto Destacado</Form.Label>
          <Form.Select
            defaultValue="Seleccione una opcion"
            name="destacarProducto"
            className="input"
          >
            <option disabled={true}>Seleccione una opcion</option>
            <option>Si</option>
            <option>No</option>
          </Form.Select>
          <Button variant="primary" type="submit" className="my-3">
            Guardar
          </Button>
        </Form>
      </div>
      <hr />
      <div>
        {productos.length > 0 ? <Paginacion lista={productos} card="listaProductosAdmin" token={token} setProductos={setProductos} setArrayBuscar={setArrayBuscar} arrayBuscar={arrayBuscar} mostrarBarra={mostrarBarra} /> : ""}
      </div>
    </div>
  );
};

export default AdminProductos;
