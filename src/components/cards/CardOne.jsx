const CardOne = ({ image, text, alt }) => {
  return (
    <div className="card-one">
      <img src={image} alt={alt ? alt : "card"} />
      <p>{text}</p>
    </div>
  );
};

export default CardOne;
