import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import NotFound from "./components/NotFound";
import MainLoader from "./components/loaders/MainLoader";

import About from "./routes/about/About";
import ImpactDetail from "./routes/impactDetail/ImpactDetail";
import PublicationDetail from "./routes/publicationDetail/PublicationDetail";
import { storage } from "./firebase/config";
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
const ProjectHub = lazy(() => import("./routes/projectHub/ProjectHub"));
const Gallery = lazy(() => import("./routes/gallery/Gallery"));
const Publication = lazy(() => import("./routes/publication/Publication"));
const Impact = lazy(() => import("./routes/impact/Impact"));
const Information = lazy(() => import("./routes/siteInformation/Information"));

function App() {
  const { pathname } = useLocation();
  const generalStorageRef = ref(storage, "gen/");
  const conferenceStorageRef = ref(storage, "con/");
  const projectStorageRef = ref(storage, "proj/");
  const communityStorageRef = ref(storage, "com/");
  const [galleryImages, setGalleryImages] = useState([]);

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
    };

    getData();
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/project"
            element={
              <Suspense fallback={<MainLoader />}>
                <ProjectHub />
              </Suspense>
            }
          />

          <Route
            path="/project/:id"
            element={
              <Suspense fallback={<MainLoader />}>
                <Information />
              </Suspense>
            }
          />

          <Route
            path="/gallery/:section"
            element={
              <Suspense fallback={<MainLoader />}>
                <Gallery galleryImages={galleryImages} />
              </Suspense>
            }
          />

          <Route
            path="/publication"
            element={
              <Suspense fallback={<MainLoader />}>
                <Publication />
              </Suspense>
            }
          />
          <Route
            path="/publication/:id"
            element={
              <Suspense fallback={<MainLoader />}>
                <PublicationDetail />
              </Suspense>
            }
          />

          <Route
            path="/impact"
            element={
              <Suspense fallback={<MainLoader />}>
                <Impact />
              </Suspense>
            }
          />

          <Route
            path="/impact/:id"
            element={
              <Suspense fallback={<MainLoader />}>
                <ImpactDetail />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<MainLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
