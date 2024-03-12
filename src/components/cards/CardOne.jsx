import PropTypes from "prop-types";

const CardOne = ({ image, text, alt, index }) => {
  return (
    <div index={index} className="card-one">
      <img src={image} alt={alt ? alt : "card"} />
      <p>{text}</p>
    </div>
  );
};

CardOne.propTypes = {
  image: PropTypes.any,
  text: PropTypes.string,
  alt: PropTypes.string,
  index: PropTypes.any,
};

export default CardOne;
