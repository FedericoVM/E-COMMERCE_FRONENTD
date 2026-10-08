import { Col, Row } from "react-bootstrap";
import ProductCard from "../../../home/productCard/ProductCard";

const ComponentePaginaTablet = ({productosHome}) =>{
    return(
        <div className='px-3'>
        <Row sm={2} md={4} className=" g-4 d-none d-sm-block d-lg-none d-sm-flex mt-1">
            {productosHome.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap">
                    <ProductCard p={p}/>
                </Col>
            ))}
        </Row>
        </div>
    )
}

export default ComponentePaginaTablet