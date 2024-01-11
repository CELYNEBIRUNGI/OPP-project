import { useLocation, useParams } from "react-router-dom";
import {
  generalList,
  generalListImgs,
  galleryProjectHub,
  galleryProjectHubImgs,
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

  const carrouselImages =
    location.pathname === "/gallery/general"
      ? generalListImgs
      : location.pathname === "/gallery/community-activity"
      ? [galleryList[0].img]
      : location.pathname === "/gallery/conferences"
      ? [galleryList[0].img]
      : galleryProjectHubImgs;

  return (
    <div>
      <div className="banner">
        <Carrousel images={carrouselImages} />
      </div>
      <div className="gallery">
        <Paginated items={renderedList} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default Gallery;
