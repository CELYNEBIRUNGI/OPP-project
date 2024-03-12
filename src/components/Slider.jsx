import PropTypes from "prop-types";

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

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
