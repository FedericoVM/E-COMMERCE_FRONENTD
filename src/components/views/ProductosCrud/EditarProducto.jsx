import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import instance from "../../../assets/api/axios";
import { useNavigate } from "react-router-dom";

const EditarProducto = ({products, getApi}) => {
  const [productoEdit, setProductoEdit] = useState(null);
  const {id} = useParams();

  const navigate = useNavigate()

  if(productoEdit === null) {
  const productoFind = products.find(producto => {
    return producto.codigo === id
  })
console.log(productoFind)
  if(productoFind !== undefined){
    setProductoEdit(productoFind)
  }
}
    const handleSubmitProducto = async(e) => {
        e.preventDefault()
        let codigoProducto = e.target.codigoProducto.value;
        let nombreProducto = e.target.nombreProducto.value;
        let marcaProducto = e.target.marcaProducto.value;
        let stockProducto = e.target.stockProducto.value;
        let precioProducto = e.target.precioProducto.value;
        let categoriaProducto = e.target.categoriaProducto.value;
        let urlProducto = e.target.urlProducto.value;
        let descripcionProducto = e.target.descripcionProducto.value
        
        const nuevoProducto = {
            codigo : codigoProducto,
            nombre :nombreProducto,
            marca : marcaProducto,
            stock : stockProducto,
            precio : precioProducto,
            categoria: categoriaProducto,
            imagen : urlProducto,
            descripcion : descripcionProducto
        }

        try {
          await instance.put(`/productos/editar-producto/${productoEdit._id}`, nuevoProducto)
          getApi()
          navigate('/tabla-productos')
        } catch (error) {
          console.log(error)
        }
        
      }
  return (
    <div>
        <h1 className='text-center'>Administrar Productos</h1>
        <hr/>
        <div className="d-flex justify-content-center">
        <Form className="col-11 col-md-8" onSubmit={handleSubmitProducto}>
        <Form.Label>Codigo</Form.Label>
        <Form.Control type="text" name="codigoProducto" placeholder="El codigo se genera de manera automatica" className="mb-3" disabled={true} defaultValue={productoEdit && productoEdit.codigo}/>
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" name="nombreProducto" placeholder="PC Gamer" className="mb-3" defaultValue={productoEdit && productoEdit.nombre}/>
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" name="marcaProducto" placeholder="Sony" className="mb-3" defaultValue={productoEdit && productoEdit.marca}/>
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" name="stockProducto" placeholder="24" className="mb-3" defaultValue={productoEdit && productoEdit.stock}/>
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" name="precioProducto" placeholder="24.499" className="mb-3" defaultValue={productoEdit && productoEdit.precio}/>
        <Form.Label>Categoria</Form.Label>
        <Form.Select defaultValue="Seleccione una categoria" name="categoriaProducto">
        <option  disabled={true}>Seleccione una categoria</option>
        <option>Electrodomesticos</option>
        <option>Computacion</option>
        <option>Aire Libre</option>
        </Form.Select>
        <Form.Label>URL imagen producto</Form.Label>
        <Form.Control type="text" name="urlProducto" placeholder="http://" className="mb-3" defaultValue={productoEdit && productoEdit.imagen}/>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" name="descripcionProducto" rows={3} placeholder="Descripcion" className="mb-1" defaultValue={productoEdit && productoEdit.descripcion}/>
      <Button variant="primary" type="submit" className="my-3">
        Submit
      </Button>
    </Form>
        </div>
    </div>
  )
}

export default EditarProducto