import PropTypes from "prop-types";
import BlurHashImg from "../BlurHashImage";

const GalleryCard = ({ item, title }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <BlurHashImg
          image={item?.img}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          width={400}
          height={400}
          alt={title}
        />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  item: PropTypes.object,
};

export default GalleryCard;
