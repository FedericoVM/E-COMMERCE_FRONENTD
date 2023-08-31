import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import instance from "../../../axios/instance";

const TablaProductos = ({ productos, token,setProductos }) => {
  const verProductos = async () => {
    try {
      const respuesta = await instance.get("/productos")
      setProductos(respuesta.data)

    } catch (error) {
      console.log(error);
    }
  }
  const eliminarProducto = async (codigo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const resp = await instance.delete(`/productos/${codigo}`, config);
      console.log(resp.data.msg)
      verProductos()

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verProductos()
  }, [])
  

  return (
    <div className="my-3 contenedor-tabla-productos">
      <Table bordered hover className="text-center tabla-de-productos">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Marca</th>
            <th>Stock</th>
            <th>Destacado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.codigo}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.categoria}</td>
              <td>{producto.marca}</td>
              <td>{producto.stock}</td>
              <td>{producto.destacado ? "Si" : "No"}</td>
              <td>
                <div className="d-flex">
                  <Button
                    className="mx-1"
                    onClick={() => {
                      eliminarProducto(producto._id);
                    }}
                  >
                    Eliminar
                  </Button>
                  <Link
                    to={`/editar-producto/${producto.codigo}`}
                    className="btn btn-primary mx-1"
                  >
                    Editar
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaProductos;
