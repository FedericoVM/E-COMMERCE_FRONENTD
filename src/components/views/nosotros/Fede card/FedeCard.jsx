import { FaLinkedin } from "react-icons/fa";
import "./fedeCard.css";
import { VscGithub } from "react-icons/vsc";

const FedeCard = () => {
  return (
    <div className="contenedor-card d-flex flex-column justify-content-around align-items-center m-3">
      <div className="contenedor-imagen flex-column rounded justify-content-center align-items-center col-md-10 col-lg-12 d-flex flex-sm-row flex-lg-column">
        <img
          src={import.meta.env.VITE_IMAGE_URL_AVATAR_NOSOTROS_FEDERICO}
          alt="avatar"
          className="imagen-integrantes rounded mt-2 mt-sm-0 p-md-1 p-lg-0"
        />
        <div className="d-flex mt-1 mt-sm-0 mt-sm-0 col-md-8 flex-column contenedor-info justify-content-evenly align-items-center h-100 col-11 col-sm-9 col-lg-12 my-lg-0">
          <p className="text-center nombre m-0 text-white fs-5">Federico Valdiglesias</p>
          <p className="text-white text-opacity-75 col-12 my-1 col-sm-10 col-md-10 mx-md-2 presentacion col-lg-10 text-center">
            Desde que descubrí el mundo de la programación, me ha fascinado la
            capacidad de crear soluciones a problemas complejos y de contribuir
            al desarrollo de tecnologías que impactan positivamente en la vida
            de las personas.
          </p>
          <div className="d-md-block d-flex d-sm-flex d-lg-none w-50 d-md-flex flex-row justify-content-evenly">
            <button className="boton-linkedin rounded rounded-4 p-1">
              <FaLinkedin className="logo-linkedin" />
            </button>
            <button className="boton-github rounded rounded-4 p-1">
              <VscGithub className="logo-github" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block d-lg-flex justify-content-evenly mt-2 w-100">
        <button className="boton-linkedin rounded">
          <FaLinkedin className="logo-linkedin" />
        </button>
        <button className="boton-github rounded">
          <VscGithub className="logo-github" />
        </button>
      </div>
    </div>
  );
};

export default FedeCard;
