import React from "react";
import Nav from "react-bootstrap/Nav";
import facebook from "../../../assets/img/footer/redes-sociales/facebook.svg";
import instagram from "../../../assets/img/footer/redes-sociales/instagram.svg";
import twitter from "../../../assets/img/footer/redes-sociales/twitter.svg";
import phone from "../../../assets/img/footer/contacto/smartphone.svg";
import mail from "../../../assets/img/footer/contacto/mail.svg";
import map from "../../../assets/img/footer/contacto/map-pin.svg";
import data_fiscal from "../../../assets/img/footer/contacto/Data-fiscal-Web.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer w-100">
        <div className="d-flex w-100 flex-column align-items-center flex-md-row py-2 p-lg-2 m-lg-0 m-0">
          <div className="col-md-2 d-flex justify-content-center align-items-center px-0">
            <h4 className="text-center fw-bold mt-2">Rolling Store</h4>
          </div>
          <div className="d-flex flex-column flex-sm-row w-100">
            <div className="d-flex contenedor-acerca-y-soporte flex-column flex-sm-row align-items-start align-items-sm-center w-100">
              <div id="acerca" className="mt-3 contenedor-acerca-footer align-items-start align-items-sm-center d-flex flex-column px-0">
                <h5 className="fw-semibold">Acerca de</h5>
                <Link
                  className="acerca_link text-decoration-none text-center text-dark"
                  to={"/nosotros"}
                >
                  ¿Quienes somos?
                </Link>
                <Link className="acerca_link text-decoration-none text-center text-dark" to={"/nosotros"}>
                  La empresa
                </Link>
                <a className="acerca_link text-decoration-none text-dark" href="https://www.google.com.ar" target="_blank">
                  Consultas
                </a>
              </div>
              <div
                id="soportes"
                className="mt-3 contenedor-soporte-footer justify-content-center align-items-start align-items-sm-center d-flex flex-column px-0"
              >
                <h5 className="fw-semibold">Soporte</h5>
                <Nav.Link className="soportes_link" target="_blank" href="https://www.google.com.ar">
                  Terminos y condiciones
                </Nav.Link>
                <Nav.Link className="soportes_link" target="_blank" href="https://www.google.com.ar">
                  Privacidad
                </Nav.Link>
                <Nav.Link className="soportes_link" target="_blank" href="https://www.google.com.ar">
                  FAQs
                </Nav.Link>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row contenedor-contacto-y-data-fiscal w-100 my-2 align-items-start align-items-sm-center justify-content-center">
                  <div id="contacto" className="my-2 d-flex flex-column align-items-start contenedor-contacto-footer mt-lg-0">
                    <Nav.Link
                      href="tel:+54381575514"
                      className="contacto_link d-flex align-items-center"
                    >
                      <img src={phone} alt="img-phone" /> 381575514
                    </Nav.Link>
                    <Nav.Link
                      href="mailto:rolling_store@gmail.com"
                      className="contacto_link d-flex align-items-center"
                    >
                      <img src={mail} alt="img-correo" className="mt-1" />{" "}
                      rolling_store@gmail.com
                    </Nav.Link>
                    <Nav.Link
                      href="https://goo.gl/maps/5CRXhzjGTpdWCdXP7"
                      className="contacto_link d-flex align-items-center"
                      target="_blank"
                    >
                      <img src={map} alt="img-map" className="mt-1" /> Gral paz
                      575 - S.M de Tucuman
                    </Nav.Link>
                  </div>
                  <div id="dataFiscal" className="mt-1 contenedor-data-fiscal-footer d-flex flex-column mt-lg-0 justify-content-start">
                    <img
                      id="data_fiscal"
                      src={data_fiscal}
                      alt="img_data_fiscal"
                      className="align-self-center"
                    />
                    <div
                  id="redes"
                  className="col-md-12 mt-2 d-flex justify-content-evenly"
                >
                  <Nav.Link
                    className="redes-icono"
                    href="https://es-la.facebook.com/"
                    target="_blank"
                  >
                    <img src={facebook} alt="redes-sociales-1" />
                  </Nav.Link>
                  <Nav.Link
                    className="redes-icono"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <img src={instagram} alt="redes-sociales-2" />
                  </Nav.Link>
                  <Nav.Link
                    className="redes-icono "
                    href="https://twitter.com/"
                    target="_blank"
                  >
                    <img src={twitter} alt="redes-sociales-3" />
                  </Nav.Link>
                </div>
                  </div>
            </div>
          </div>
        </div>
        <div
          id="copy"
          className="bg-dark text-white d-flex justify-content-center align-items-center"
        >
          <p className="m-0">Grupo 1 - Rolling Store © 2022 </p>
        </div>
      </div>
    </>
  );
};

export default Footer;