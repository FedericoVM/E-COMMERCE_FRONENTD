import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const HoverImagenTabla = ({productoPropiedades}) => {
     const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button className='fw-semibold border border-2 border-success py-1 boton-ver-tabla-grande-admin' variant={show? "success":'outline-success'} ref={target} onClick={() => setShow(!show)}>
        Ver
      </Button>
      <Overlay rootClose={true} target={target.current} onHide={()=> {setShow(false)}} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" className='imagen-overlay-admin' {...props}>
            <div>
            <img className='container img-thumbnail' src={productoPropiedades.imagen}/>
            <div className='bg-white pb-1 border-top col-12 rounded-bottom d-flex flex-row justify-content-center'>
              <p className='text-dark fs-6 m-0 categorias-nombre-hover-img mx-2'>Marca:</p>
              <p className='text-dark fs-6 m-0 marca-hover-img-admin'>{productoPropiedades.marca}</p>
            </div>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default HoverImagenTabla