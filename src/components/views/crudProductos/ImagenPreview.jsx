import { useState } from "react";

const ImagenPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);
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
              : import.meta.env.VITE_IMAGE_URL_IMAGEN_ERROR
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
