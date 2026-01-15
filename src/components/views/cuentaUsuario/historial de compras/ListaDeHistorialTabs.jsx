import { Tab, Tabs } from "react-bootstrap";
import { UserHook } from "../../../../context/Contexto de Usuarios/UserHook";
import { useEffect, useState } from "react";
import "./csshistorialproductos/ListaDeHistorial.css";
import ComponenteListaHistorial from "./ComponenteListaHistorial";

const ListaDeHistorialTabs = () => {

  const [pagosRechazados, setPagosRechazados] = useState([]);
  const [pagosPendientes, setPagosPendientes] = useState([]);
  const [pagosExitosos, setPagosExitosos] = useState([])
  const { usuarioHistorialCompras } = UserHook();

  const filtrarArrayHistorial = (array) =>{
    let aprobados = [];
    let pendientes = [];
    let rechazados = [];

    array.forEach((element)=>{
      if(element.paymentStatus == "approved") return aprobados.push(element)
      if(element.paymentStatus == "in_process") return pendientes.push(element)
      if(element.paymentStatus == "rejected") return rechazados.push(element)
    })

    setPagosExitosos(aprobados);
    setPagosPendientes(pendientes);
    setPagosRechazados(rechazados)
  }

  useEffect(()=>{
    if(usuarioHistorialCompras){
    filtrarArrayHistorial(usuarioHistorialCompras)
  }
  },[usuarioHistorialCompras])

  return (
    <div className="align-self-start m-0 componente-contenedor-listas-historial rounded col-12">
     <Tabs
      defaultActiveKey="todos"
      id="justify-tab-example"
      className="row-tabs-historial"
      justify
    >
      <Tab eventKey="todos" title="Todos">
        <ComponenteListaHistorial productosFiltrados={usuarioHistorialCompras} textoVacioArray={"pagos"}/>
      </Tab>
      <Tab eventKey="aprobados" title="Aprobados">
        <ComponenteListaHistorial productosFiltrados={pagosExitosos} textoVacioArray={"aprobados"}/>
      </Tab>
      <Tab eventKey="pendientes" title="Pendiente">
        <ComponenteListaHistorial productosFiltrados={pagosPendientes} textoVacioArray={"pendientes"}/>
      </Tab>
      <Tab eventKey="rechazados" title="Rechazados">
        <ComponenteListaHistorial productosFiltrados={pagosRechazados} textoVacioArray={"rechazados"}/>
      </Tab>
    </Tabs>
    </div>
  );
};

export default ListaDeHistorialTabs;
