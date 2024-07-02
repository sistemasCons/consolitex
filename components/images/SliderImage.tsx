import React, { useState } from "react";
import { Image } from "@mui/icons-material";

interface SliderProps {
  imagesList: string[];
}

const Slider: React.FC<SliderProps> = ({ imagesList }) => {
  // VARIABLES Y ESTADOS
  const [currentImage, setCurrentImage] = useState(0);
  const quantity = imagesList?.length;

  // RETORNO PREMATURO PARA EVITAR ERRORES
  if (!Array.isArray(imagesList) || quantity === 0) {
    return null;
  }

  // IMAGEN SIGUIENTE
  const nextImg = () => {
    setCurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1);
  };

  // IMAGEN ANTERIOR
  const prevImg = () => {
    setCurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1);
  };

  return (
    <div className="container">
      <button onClick={prevImg}>Izq.</button>

      {imagesList.map((i: any) => (
        <div key={i}>
          {currentImage === i && (
            <Image
              src={`https://images.consolitex.org/newImg.php?url=${encodeURI(
                i
              )}`}
              alt="img"
            />
          )}
        </div>
      ))}

      <button onClick={nextImg}>Der.</button>
    </div>
  );
};

export default Slider;
