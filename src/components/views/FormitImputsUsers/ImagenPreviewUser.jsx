import { useState } from "react";
import {Image} from 'react-bootstrap'

const ImagenPreviewUser = ({file}) => {
    const [preview, setPreview] = useState(null);
    const urlImagenError =
      "https://res.cloudinary.com/do6ot3gss/image/upload/v1705626838/como-reparar-el-error-carga-error-al-escribir-el-archivo-en-el-disco-en-wordpress_5d9d8fb7c3951_ydaitl.jpg";
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
                : urlImagenError
            }
            alt="preview"
            className=" img-upload img-thumbnail"
          />
        ) : (
          "Cargando..."
        )}
      </div>
    );
}

export default ImagenPreviewUser