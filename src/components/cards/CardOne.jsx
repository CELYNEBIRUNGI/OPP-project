import PropTypes from "prop-types";
import BlurHashImg from "../BlurHashImage";

const CardOne = ({ image, text, alt, index }) => {
  return (
    <div index={index} className="card-one">
      <div className="card-one-img">
        <BlurHashImg
          image={image}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          width={240}
          height={200}
          alt={'card-one description'}
        />
      </div>
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
