import FedeCard from "./Fede card/FedeCard";
import WilliamCard from "./William card/WilliamCard";

const Nosotros = () => {

  return (
    <div className="d-flex flex-column col-12 justify-content-center align-content-center">
      <div className="d-flex justify-content-center align-items-center flex-column my-3">
        <p className=" text-center fs-1 align-self-center titulos-de-paginas">Rolling Store</p>
        <p className="col-11 col-md-10 col-lg-9 fw-light m-0 text-center">
          Somos una empresa emergente, comprometida en cumplir y sobrepasar las
          expectativas y necesidades de nuestros clientes actuales y futuros.
          Nuestra misión es ofrecer una gran variedad de productos y servicios
          con la mejor calidad a un precio accesible para todos. Nuestra visión
          es seguir creciendo como empresa aplicando la mejora continua, con el
          fin de ofrecer mejor calidad de productos y servicios.
        </p>
      </div>
      <div className="d-flex w-100 justify-content-evenly flex-column flex-lg-row">
        <FedeCard/>
        <WilliamCard/>
      </div>
    </div>
  );
};

export default Nosotros;
