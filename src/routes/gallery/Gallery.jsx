import { useState, useEffect, Suspense, lazy } from "react";
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

const Paginated = lazy(() => import("../../components/Paginated"));
import Carrousel from "../../components/Carrousel";

const Gallery = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [galleryImages, setGalleryImages] = useState([]);
  const [carrouselImages, setCarrouselImages] = useState([]);

  useEffect(() => {
    if (location.pathname === "/gallery/general") {
      setCarrouselImages(generalListImgs);
      setGalleryImages(generalList);
    } else if (location.pathname === "/gallery/community-activity") {
      setCarrouselImages(communityGaleryImgs);
      setGalleryImages(communityActivityList);
    } else if (location.pathname === "/gallery/conferences") {
      setCarrouselImages(conferenceGalleryImgs);
      setGalleryImages(conferencesList);
    } else {
      setCarrouselImages(galleryProjectHubImgs);
      setGalleryImages(galleryProjectHub);
    }
  }, [location.pathname]);

  return (
    <main>
      <div className="banner">
        <Carrousel images={carrouselImages} />
      </div>
      <div className="gallery">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Paginated items={galleryImages} itemsPerPage={isMobile ? 4 : 9} />
        </Suspense>
      </div>
    </main>
  );
};

export default Gallery;
