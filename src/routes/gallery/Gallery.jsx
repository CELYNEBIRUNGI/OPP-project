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

const Gallery = ({ loader }) => {
  const location = useLocation();
  const [isMobile, _] = useState(window.innerWidth < 768);
  const [galleryImages, setGalleryImages] = useState({});
  const [loadPage, setLoadPage] = useState(true);
  const [loadData, setLoadData] = useState(true);
  const currentData = galleryImages[location.pathname.split("/gallery/")[1]];
  const carrouselImages = [];
  currentData?.map((image) => {
    carrouselImages.push(image.img);
  });

  useEffect(() => {
    const getData = async () => {
      const getUrls = async (imageRef) => {
        try {
          const list = await listAll(imageRef);
          const urls = await Promise.all(
            list.items.map(async (itemRef) => {
              const img = await getDownloadURL(itemRef);
              const meta = await getMetadata(itemRef);
              return { ...meta, img };
            })
          );
          return urls;
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };

      const general = await getUrls(generalStorageRef);
      const conferences = await getUrls(conferenceStorageRef);
      const community = await getUrls(communityStorageRef);
      const projects = await getUrls(projectStorageRef);

      setGalleryImages({
        general,
        conferences,
        community,
        projects,
      });
      setLoadData(false);
    };

    getData();
  }, []);

  useEffect(() => {
    setLoadPage(true);
    const timeoutId = setTimeout(() => {
      setLoadPage(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  if (loader || loadPage || loadData) {
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
