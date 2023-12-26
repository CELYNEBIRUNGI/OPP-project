import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./routes/home/Home";
import NotFound from "./components/NotFound";

const About = lazy(() => import("./routes/about/About"));
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
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence initial={false}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<ProjectHub />} />
              <Route path="/project/:id" element={<Information />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/publication" element={<Publication />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
