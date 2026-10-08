import { Col, Row} from "react-bootstrap";
import ProductCard from "../../../home/productCard/ProductCard";

const ComponentePaginaMobile = ({productosHome}) =>{
    return(
        <div className='d-flex flex-column'>
        <Row xs={2} className=" g-4 d-flex d-md-none d-lg-none mt-3 ">
            {productosHome.map((p, index) => (
                <Col key={index} className="d-flex flex-wrap mt-3 p-2">
                    <ProductCard p={p}/>
                </Col>
            ))}
        </Row>
        </div>
    )
}

export default ComponentePaginaMobile