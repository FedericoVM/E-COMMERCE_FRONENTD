import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import instance from "../../../assets/api/axios";
import TablaProductos from "./TablaProductos";

const AdminProductos = ({productos, getApi}) => {

      const crearProducto = async (e) => {
        e.preventDefault()
        let codigo = e.target.codigoProducto.value;
        let nombre = e.target.nombreProducto.value;
        let marca = e.target.marcaProducto.value;
        let stock = e.target.stockProducto.value;
        let precio = e.target.precioProducto.value;
        let categoria = e.target.categoriaProducto.value;
        let imagen = e.target.urlProducto.value;
        let descripcion = e.target.descripcionProducto.value
        
        const nuevoProducto = {
             codigo,
            nombre,
            marca,
            stock,
            precio,
            categoria,
            imagen,
            descripcion
        }

        try {
          await instance.post('/productos/',nuevoProducto)
          getApi()
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className='container d-flex flex-column'>
        <h1 className='text-center'>Administrar Productos</h1>
        <hr/>
        <div className="d-flex justify-content-center">
        <Form className="col-11 col-md-8" onSubmit={crearProducto}>
        <Form.Label>Codigo</Form.Label>
        <Form.Control type="text" name="codigoProducto" placeholder="El codigo se genera de manera automatica" className="mb-3" disabled={true} value={Date.now()}/>
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" name="nombreProducto" placeholder="PC Gamer" className="mb-3"/>
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" name="marcaProducto" placeholder="Sony" className="mb-3"/>
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" name="stockProducto" placeholder="24" className="mb-3"/>
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" name="precioProducto" placeholder="24.499" className="mb-3"/>
        <Form.Label>Categoria</Form.Label>
        <Form.Select defaultValue="Seleccione categoria" name="categoriaProducto">
        <option  disabled={true}>Seleccione categoria</option>
        <option>electrodomesticos</option>
        <option>computacion</option>
        <option>aire libre</option>
        </Form.Select>
        <Form.Label>URL imagen producto</Form.Label>
        <Form.Control type="text" name="urlProducto" placeholder="http://" className="mb-3"/>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" name="descripcionProducto" rows={3} placeholder="Descripcion" className="mb-1"/>
      <Button variant="primary" type="submit" className="my-3">
        Guardar
      </Button>
    </Form>
        </div>
        <hr/>
    <div>
        <TablaProductos productos={productos} getApi={getApi}/>
    </div>
    </div>
  )
}

export default AdminProductos