import PropTypes from "prop-types";
import BlurHashImg from "./BlurHashImage";

const Slider = ({ images }) => {
  return (
    <div className="slider-images">
      {images?.map((image, index) => (
        <div className="" key={index}>
          <BlurHashImg
            image={image}
            hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
            width={400}
            height={400}
          />
          {/* <img src={image} alt={`slider image ${index}`} /> */}
        </div>
      ))}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
