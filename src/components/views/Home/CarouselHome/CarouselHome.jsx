import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const CarouselHome = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block carrusel container" src="https://gestion.pe/resizer/YmerYihVH7FbaPWaavXLJQBdo30=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2GKAEPYEQNC4ZK2PE7XBKLTV5A.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carrusel container"
            src="https://img.freepik.com/vector-gratis/ilustracion-banner-tecnologia-computadora-escritorio_107791-7920.jpg?w=996&t=st=1671643256~exp=1671643856~hmac=362beb81d3300fef422289232c96b875e8a9bcdc65c27c4ba6aaac825fcdfa82"
            alt="Second slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default CarouselHome;