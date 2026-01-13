import { Accordion, Table } from "react-bootstrap";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import React from "react";
import "./csshistorialproductos/ListaDeHistorial.css";
import TablaInfoHistorial from "./TablaInfoHistorial";

const ListaDeHistorial = () => {
  const { usuarioHistorialCompras, fechaDeCompra } = UserHook();
  const { formatPrecio } = ProductosHook();

  return (
    <div className="contenedor-tabla-historial-compras col-12 align-self-start">
      <div className="d-flex col-12 flex-row thead-fake-historial-compras sticky-top">
        <p className="col-2 m-auto th-tarjeta-historial-compras text-center">Tarjeta</p>
        <p className="col-2 m-auto th-cantidad-historial-compras text-center">Cantidad</p>
        <p className="col-4 m-auto th-total-historial-compras text-center">Total</p>
        <p className="col-4 m-auto th-fecha-historial-compras text-center">Fecha</p>
      </div>
      <Table bordered hover className="tablaHistorial">
        <tbody>
          {usuarioHistorialCompras.map((producto, index) => (
            <React.Fragment key={index}>
              <tr className="tr-detalles">
                <td className="text-center texto-td-historial-compras col-2">{producto.emisorTarjeta}</td>
                <td className="text-center texto-td-historial-compras col-2">{producto.totalDeProductos}</td>
                <td className="text-center texto-td-historial-compras col-4">{formatPrecio(producto.costo)}</td>
                <td className="text-center texto-td-historial-compras col-4">{fechaDeCompra(producto.paymentOrder)}</td>
              </tr>
              <tr className="caja-info">
                <td colSpan={4} className="td-info">
                  <Accordion>
                    <Accordion.Item eventKey="0" className="">
                      <Accordion.Header className="acordion-info-historial">Info</Accordion.Header>
                      <Accordion.Body className="m-0 p-0">
                        <TablaInfoHistorial productos={producto.productos}/>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaDeHistorial;
