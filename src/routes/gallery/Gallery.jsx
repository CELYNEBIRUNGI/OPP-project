import { useState, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

import Carrousel from "../../components/Carrousel";
import MainLoader from "../../components/loaders/MainLoader";
import withLoadingState from "../../components/withLoadingState";
import PropTypes from "prop-types";
import {
  generalTitles,
  projectHubTitles,
  conferencesTitles,
  communityTitles,
} from "../../lib/galleryLists";

const Paginated = lazy(() => import("../../components/Paginated"));

const Gallery = ({ loader, galleryImages, loadImages }) => {
  const location = useLocation();
  const [isMobile, _] = useState(window.innerWidth < 768);
  const [loadPage, setLoadPage] = useState(true);
  const [titleData, setTitleData] = useState(null);

  const currentData = galleryImages[location.pathname.split("/gallery/")[1]];
  const carrouselImages = [];
  currentData?.map((image) => {
    carrouselImages.push(image.img);
  });

  useEffect(() => {
    setLoadPage(true);
    const timeoutId = setTimeout(() => {
      setLoadPage(false);
      switch (location.pathname) {
        case "/gallery/projects":
          setTitleData(projectHubTitles);
          break;
        case "/gallery/community":
          setTitleData(communityTitles);
          break;
        case "/gallery/conferences":
          setTitleData(conferencesTitles);
          break;
        default:
          setTitleData(generalTitles);
          break;
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  if (loader || loadPage) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <main>
      <div className="banner">
        <Carrousel images={carrouselImages} />
      </div>
      <div className="gallery">
        <Suspense>
          {loadImages && (
            <h1 style={{ textAlign: "center" }}>Loading images...</h1>
          )}
          <Paginated
            items={currentData}
            itemsPerPage={isMobile ? 4 : 9}
            titles={titleData}
          />
        </Suspense>
      </div>
    </main>
  );
};

Gallery.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(Gallery);
