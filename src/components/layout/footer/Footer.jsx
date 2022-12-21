import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import facebook from "../../../assets/img/footer/redes-sociales/facebook.svg";
import instagram from "../../../assets/img/footer/redes-sociales/instagram.svg";
import twitter from "../../../assets/img/footer/redes-sociales/twitter.svg";
import phone from "../../../assets/img/footer/contacto/smartphone.svg";
import mail from "../../../assets/img/footer/contacto/mail.svg";
import map from "../../../assets/img/footer/contacto/map-pin.svg";
import data_fiscal from "../../../assets/img/footer/contacto/Data-fiscal-Web.jpg"

const Footer = () => {
  return (
    <>
      <Container fluid className="px-0 footer-repar">

      <div className="footer">
        <div id="informacion" className="row d-flex flex-column align-items-center  d-lg-flex flex-lg-row p-0 py-2  p-lg-2  m-lg-0 m-0">
          <div className="col col-md-3  d-flex  justify-content-center align-items-center px-0">
            <h4 className="text-center fw-bold mt-2">Rolling Store</h4>
          </div>
          <div id="acerca" className="mt-3 col col-md-3 d-flex flex-column align-items-center px-0">
            <h5 className="fw-semibold">Acerca de</h5>
            <Nav.Link className="acerca_link" href="#home">¿Quienes somos?</Nav.Link>
            <Nav.Link className="acerca_link" href="#home">La empresa</Nav.Link>
            <Nav.Link className="acerca_link" href="#home">Consultas</Nav.Link>
          </div>
          <div id="soportes" className="mt-3 col col-md-3 d-flex flex-column align-items-center px-0">
            <h5 className="fw-semibold">Soporte</h5>
            <Nav.Link className="soportes_link"  href="#home">Terminos y condiciones</Nav.Link>
            <Nav.Link className="soportes_link" href="#home">Privacidad</Nav.Link>
            <Nav.Link className="soportes_link" href="#home">FAQs</Nav.Link>
          </div>
          <div className="mt-3 col col-md-3  d-flex flex-column px-0 ">
            <div id="contacto-dataFiscal" className=" d-flex flex-column align-items-center d-lg-flex  flex-lg-row d- justify-content-lg-around align-items-lg-center  ">
              <div id="contacto" className="mt-2 mt-lg-0"   >
                <Nav.Link href="tel:+54381575514" className="contacto_link d-flex align-items-center" >
                  <img src={phone} alt="img-phone" /> 381575514
                </Nav.Link>
                <Nav.Link href="mailto:rolling_store@gmail.com" className="contacto_link d-flex align-items-center" >
                  <img src={mail} alt="img-correo" className="mt-1" />  rolling_store@gmail.com
                </Nav.Link>
                <Nav.Link href="https://goo.gl/maps/5CRXhzjGTpdWCdXP7" className="contacto_link d-flex align-items-center" target="_blank">
                  <img src={map} alt="img-map" className="mt-1" />  Gral paz 575 - S.M de Tucuman
                </Nav.Link>

              </div>
              <div id="dataFiscal" className="img-fluid  my-3 mt-lg-0">
                <img id="data_fiscal" src={data_fiscal} alt="img_data_fiscal" />
              </div>
            </div>
            <div id="redes" className=" mt-3 mt-md-1 d-flex justify-content-evenly">
              <Nav.Link className="redes-icono" href="https://es-la.facebook.com/" target="_blank">
                <img src={facebook} alt="redes-sociales-1" />
              </Nav.Link>
              <Nav.Link className="redes-icono" href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="redes-sociales-2" />
              </Nav.Link>
              <Nav.Link className="redes-icono " href="https://twitter.com/" target="_blank">
                <img src={twitter} alt="redes-sociales-3" />
              </Nav.Link>
            </div>
          </div>
        </div>
        <div id="copy" className="bg-dark text-white d-flex justify-content-center align-items-center">
          <p className="m-0">Grupo 1 - Rolling Store © 2022 </p>
        </div>
      </div>

      </Container>
    
    </>
  );
};

export default Footer;