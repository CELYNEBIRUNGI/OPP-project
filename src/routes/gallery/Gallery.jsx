import Paginated from "../../components/Paginated";
import { galleryList } from "../../lib/lists";
const Gallery = () => {
  return (
    <div>
      <div className="banner">
        <img src="" alt="" />
      </div>
      <div className="gallery">
        <Paginated items={galleryList} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default Gallery;
