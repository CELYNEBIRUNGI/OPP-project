import PropTypes from "prop-types";

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <img src={item?.img} alt={item.title} />
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
