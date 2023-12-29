import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instanceFormData from "../../../axios/instanceFormData";
import instance from "../../../axios/instance";

const EditarProducto = ({ productos, token,setProductos }) => {

  const [productoEdit, setProductoEdit] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  
  const verProductos = async () => {
    try {
      const respuesta = await instance.get("/productos")
      setProductos(respuesta.data)

    } catch (error) {
      console.log(error);
    }
  }



  if (productoEdit === null) {
    const productoFind = productos.find(producto => {
      return producto.codigo === id
    })
    

    if (productoFind !== undefined) {
      setProductoEdit(productoFind)
    }

  }
  const editarProducto = async (e) => {
    e.preventDefault()

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

  

    let codigo = e.target.codigoProducto.value;
    let nombre = e.target.nombreProducto.value;
    let marca = e.target.marcaProducto.value;
    let stock = e.target.stockProducto.value;
    let precio = e.target.precioProducto.value;
    let categoria = e.target.categoriaProducto.value;
    let imagen = e.target.imagen.files[0];
    let descripcion = e.target.descripcionProducto.value;
    let destacado; 
    e.target.destacarProducto.value === "Si" ? destacado = true : destacado = false;


    const formData = new FormData()

    formData.append('nombre', nombre);
    formData.append('codigo', codigo);
    formData.append('marca', marca);
    formData.append('stock', stock);
    formData.append('precio', precio)
    formData.append('categoria', categoria)
    formData.append('imagen',imagen);
    formData.append('descripcion', descripcion)
    formData.append('destacado', destacado)

    try {
      const resp = await instanceFormData.put(`/productos/${productoEdit._id}`,formData,config)
      verProductos()
      navigate('/admin-productos')
    } catch (error) {
      console.log(error.response.data)
    }

  }


  const regresar = ()=>{
    navigate("/admin-productos")
  }

  useEffect(() => {
    verProductos()
  }, [])
  
  return (
    <div>
      <h1 className='text-center'>Administrar Productos</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <Form className="col-11 col-md-8" onSubmit={editarProducto}>
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="text" name="codigoProducto" placeholder="El codigo se genera de manera automatica" className="mb-3" disabled={true} defaultValue={productoEdit && productoEdit.codigo} />
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" name="nombreProducto" placeholder="PC Gamer" className="mb-3" defaultValue={productoEdit && productoEdit.nombre} />
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" name="marcaProducto" placeholder="Sony" className="mb-3" defaultValue={productoEdit && productoEdit.marca} />
          <Form.Label>Stock</Form.Label>
          <Form.Control type="text" name="stockProducto" placeholder="24" className="mb-3" defaultValue={productoEdit && productoEdit.stock} />
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" name="precioProducto" placeholder="24.499" className="mb-3" defaultValue={productoEdit && productoEdit.precio} />
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="Seleccione una categoria" name="categoriaProducto">
            <option disabled={true}>Seleccione una categoria</option>
            <option>Electrodomesticos</option>
            <option>Computacion</option>
            <option>Aire Libre</option>
          </Form.Select>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Foto del producto</Form.Label>
            <Form.Control
              type="file"
              name="imagen"
            />
          </Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" name="descripcionProducto" rows={3} placeholder="Descripcion" className="mb-1" defaultValue={productoEdit && productoEdit.descripcion} />
          <Form.Label>Destacar Producto</Form.Label>
          <Form.Select defaultValue="Seleccione una respuesta" name="destacarProducto">
            <option disabled={true}>Seleccione una respuesta</option>
            <option >Si</option>
            <option >No</option>
          </Form.Select>
          <Button variant="danger" type="submit" onClick={regresar} > 
                        Cancelar
                    </Button>
          <Button variant="primary" type="submit" className="my-3">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default EditarProducto