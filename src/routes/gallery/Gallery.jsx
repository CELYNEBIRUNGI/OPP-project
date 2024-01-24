import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  generalList,
  generalListImgs,
  galleryProjectHub,
  galleryProjectHubImgs,
  communityActivityList,
  communityGaleryImgs,
  conferencesList,
  conferenceGalleryImgs,
} from "../../lib/galleryLists";

import Paginated from "../../components/Paginated";
import Carrousel from "../../components/Carrousel";

const Gallery = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      ? communityGaleryImgs
      : location.pathname === "/gallery/conferences"
      ? conferenceGalleryImgs
      : galleryProjectHubImgs;

  return (
    <main>
      <div className="banner">
        <Carrousel images={carrouselImages} />
      </div>
      <div className="gallery">
        <Paginated items={renderedList} itemsPerPage={isMobile ? 4 : 9} />
      </div>
    </main>
  );
};

export default Gallery;
