import { useState } from "react";
import {Image} from 'react-bootstrap'

const ImagenPreviewUser = ({file}) => {
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  
    return (
      <div className="d-flex align-items-center justify-content-center">
        {preview ? (
          <Image
          roundedCircle
            src={
              ["image/png", "image/jpeg"].includes(file.type)
                ? preview
                : import.meta.env.VITE_IMAGE_URL_IMAGEN_ERROR
            }
            alt="preview"
            className=" img-upload img-thumbnail my-2"
          />
        ) : (
          "Cargando..."
        )}
      </div>
    );
}

export default ImagenPreviewUser