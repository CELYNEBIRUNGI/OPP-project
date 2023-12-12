import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
