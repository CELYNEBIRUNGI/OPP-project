import React from "react";

const Slider = ({ images }) => {
  return (
    <div className="slider-images">
      {images?.map((image, index) => (
        <div className="" key={index}>
          <img src={image} alt={`slider image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
