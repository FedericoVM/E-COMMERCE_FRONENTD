import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img_carousel from "../../../../assets/img/carousel/img-1.webp";
import img_carousel_1 from "../../../../assets/img/carousel/img-2.webp";
import tarjetas from "../../../../assets/img/pagos/tarjeta.png";
import img_envio from "../../../../assets/img/pagos/envio.png";
import "./carouselHome.css"


const CarouselHome = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={img_carousel} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_carousel_1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_carousel_1}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className=" d-none d-md-inline bg-light d-md-flex justify-content-md-evenly aling-items-md-center py-2 border-bottom">
                <div className="">
                    <img className="tarjetas " src={tarjetas} alt="img_tarjetas" />
                    Pagá con crédito y débito
                </div>
                <div className="">
                    <img className="envio" src={img_envio} alt="img_envio" />
                    Envíos a todo el país y retiro gratis
                </div>
            </div>
        </>
    );
};

export default CarouselHome;