import { useLocation, useParams } from "react-router-dom";
import {
  generalList,
  galleryProjectHub,
  communityActivityList,
  conferencesList,
} from "../../lib/galleryLists";
import Paginated from "../../components/Paginated";
import { galleryList } from "../../lib/lists";
import Carrousel from "../../components/Carrousel";
const Gallery = () => {
  const location = useLocation();
  const renderedList =
    location.pathname === "/gallery/general"
      ? generalList
      : location.pathname === "/gallery/community-activity"
      ? communityActivityList
      : location.pathname === "/gallery/conferences"
      ? conferencesList
      : galleryProjectHub;

  return (
    <div>
      <div className="banner">
        <Carrousel images={[galleryList[0].img]} />
      </div>
      <div className="gallery">
        <Paginated items={renderedList} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default Gallery;
