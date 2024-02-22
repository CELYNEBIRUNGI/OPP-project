import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import NotFound from "./components/NotFound";
import MainLoader from "./components/loaders/MainLoader";

import About from "./routes/about/About";
const ProjectHub = lazy(() => import("./routes/projectHub/ProjectHub"));
const Gallery = lazy(() => import("./routes/gallery/Gallery"));
const Publication = lazy(() => import("./routes/publication/Publication"));
const Impact = lazy(() => import("./routes/impact/Impact"));
const Information = lazy(() => import("./routes/siteInformation/Information"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Suspense fallback={<MainLoader />}>
        {/* <AnimatePresence initial={false}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<MainLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<MainLoader />}>
                  <About />
                </Suspense>
              }
            />
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
                  <Gallery />
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
              path="/impact"
              element={
                <Suspense fallback={<MainLoader />}>
                  <Impact />
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
        {/* </AnimatePresence> */}
      </Suspense>
    </>
  );
}

export default App;
