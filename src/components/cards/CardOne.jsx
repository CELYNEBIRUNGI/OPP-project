import Staggered from "../transitions/Staggered";

const CardOne = ({ image, text, alt, index }) => {
  return (
    <div index={index} className="card-one">
      <img src={image} alt={alt ? alt : "card"} />
      <p>{text}</p>
    </div>
  );
};

export default CardOne;
