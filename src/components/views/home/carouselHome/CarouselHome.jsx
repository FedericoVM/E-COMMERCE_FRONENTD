import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img_carousel from "../../../../assets/img/carousel/img-1.webp";
import img_carousel_1 from "../../../../assets/img/carousel/img-2.webp";
import tarjetas from "../../../../assets/img/pagos/tarjeta.png";
import img_envio from "../../../../assets/img/pagos/envio.png";
import ofertas from "../../../../assets/img/carousel/ofertasBanner.jpg"
import "./carouselHome.css";
import { useNavigate } from "react-router-dom";

const CarouselHome = () => {

    const navigate = useNavigate()

    const navigateCarousel = (destino) =>{
        return navigate(`/${destino}`)
    }
    
    return (
        <>
            <Carousel fade className="contenedor-carousel">
                <Carousel.Item className="carousel-item">
                    <img className="d-block w-100" onClick={()=>{navigateCarousel('destacados')}} src={ofertas} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_carousel}
                        alt="Second slide"
                        onClick={()=>{navigateCarousel('electrodomesticos')}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        onClick={()=>{navigateCarousel('computacion')}}
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