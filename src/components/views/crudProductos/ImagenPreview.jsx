import { useState } from "react";

const ImagenPreview = ({ file, clasName}) => {
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
          className={clasName ? clasName : "imagen-producto-crud img-thumbnail rounded rounded-2"}
        />
      ) : (
        <img
        className={clasName ? clasName : "imagen-producto-crud img-thumbnail rounded rounded-2"}
        src="https://th.bing.com/th/id/OIP.tUidC71DuFwjno8Thjy2lgHaHa?rs=1&pid=ImgDetMain"
        />
      )}
    </div>
  );
};

export default ImagenPreview;
