import Paginated from "../../components/Paginated";
import { galleryList } from "../../lib/lists";
import Carrousel from "../../components/Carrousel";
const Gallery = () => {
  return (
    <div>
      <div className="banner">
        <Carrousel images={[galleryList[0].img]} />
      </div>
      <div className="gallery">
        <Paginated items={galleryList} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default Gallery;
