import PropTypes from "prop-types";
import BlurHashImg from "../BlurHashImage";

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <BlurHashImg
          image={item?.img}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          width={400}
          height={400}
        />
      </div>
      <div className="card-body">
        <h3>This Article’s Title goes Here</h3>
        <div className="props">
          <p>05, September 2021</p>
          <p>By Author</p>
        </div>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          diam quis accumsan placerat, enim ipsum ultricies sapien, ut rhoncus
          nisl nunc eget augue.
        </p> */}
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  item: PropTypes.object,
};

export default GalleryCard;
