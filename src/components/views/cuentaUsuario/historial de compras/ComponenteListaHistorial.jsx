import { Accordion, Table } from "react-bootstrap";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { ProductosHook } from "../../../../context/Contexto de Productos/ProductosHook";
import React from "react";
import "./csshistorialproductos/ListaDeHistorial.css";
import TablaInfoHistorial from "./TablaInfoHistorial";

const ComponenteListaHistorial = ({ productosFiltrados, textoVacioArray }) => {
  const { fechaDeCompra } = UserHook();
  const { formatPrecio } = ProductosHook();

  return (
    <div className="overflow-auto col-12 contenedor-padre-historial-compras border align-self-start">
      <div className="contenedor-tabla-historial-compras">
      <div className="d-flex col-12 flex-row fixed-top thead-fake-historial-compras">
        <p className="col-2 m-auto th-tarjeta-historial-compras text-center">
          Tarjeta
        </p>
        <p className="col-2 m-auto th-cantidad-historial-compras text-center">
          Cantidad
        </p>
        <p className="col-4 m-auto th-total-historial-compras text-center">
          Total
        </p>
        <p className="col-4 m-auto th-fecha-historial-compras text-center">
          Fecha
        </p>
      </div>
      {productosFiltrados.length > 0 ? <Table bordered hover>
        <tbody>
          {productosFiltrados.map((producto, index) => (
            <React.Fragment key={index}>
              <tr className="tr-detalles">
                <td className="text-center texto-td-historial-compras col-2">
                  {producto.emisorTarjeta}
                </td>
                <td className="text-center texto-td-historial-compras col-2">
                  {producto.totalDeProductos}
                </td>
                <td className="text-center texto-td-historial-compras col-4">
                  {formatPrecio(producto.costo)}
                </td>
                <td className="text-center texto-td-historial-compras col-4">
                  {fechaDeCompra(producto.paymentOrder)}
                </td>
              </tr>
              <tr className="caja-info">
                <td colSpan={4} className="td-info">
                  <Accordion>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header className={`acordion-info-button-historial ${producto.paymentStatus}`}>
                        {'Info'}
                      </Accordion.Header>
                      <Accordion.Body className="m-0 p-0">
                        <TablaInfoHistorial productos={producto.productos} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table> : <h2 className="d-flex align-items-center lista-historial-vacia justify-content-center col-12">Su historial de {textoVacioArray} esta vacio</h2>}
      </div>
    </div>
  );
};

export default ComponenteListaHistorial;
