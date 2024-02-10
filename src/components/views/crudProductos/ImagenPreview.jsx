import { useState } from "react";

const ImagenPreview = ({ file }) => {
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
        <img
          src={
            ["image/png", "image/jpeg"].includes(file.type)
              ? preview
              : urlImagenError
          }
          alt="preview"
          className=" img-upload img-thumbnail rounded rounded-5"
        />
      ) : (
        "Cargando..."
      )}
    </div>
  );
};

export default ImagenPreview;
