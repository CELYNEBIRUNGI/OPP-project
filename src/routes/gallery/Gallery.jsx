import { useState, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

import Carrousel from "../../components/Carrousel";
import MainLoader from "../../components/loaders/MainLoader";
import withLoadingState from "../../components/withLoadingState";
import PropTypes from "prop-types";
import { storage } from "../../firebase/config";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

const Paginated = lazy(() => import("../../components/Paginated"));
const generalStorageRef = ref(storage, "gen/");
const conferenceStorageRef = ref(storage, "con/");
const projectStorageRef = ref(storage, "proj/");
const communityStorageRef = ref(storage, "com/");

const Gallery = ({ loader, galleryImages }) => {
  const location = useLocation();
  const [isMobile, _] = useState(window.innerWidth < 768);
  const [loadPage, setLoadPage] = useState(true);
  const currentData = galleryImages[location.pathname.split("/gallery/")[1]];
  const carrouselImages = [];
  currentData?.map((image) => {
    carrouselImages.push(image.img);
  });

  useEffect(() => {
    setLoadPage(true);
    const timeoutId = setTimeout(() => {
      setLoadPage(false);
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <Paginated items={currentData} itemsPerPage={isMobile ? 4 : 9} />
        </Suspense>
      </div>
    </main>
  );
};

Gallery.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(Gallery);
