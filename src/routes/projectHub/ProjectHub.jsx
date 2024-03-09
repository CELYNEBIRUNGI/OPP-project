import { projectHubList } from "../../lib/projectHubLists";
import { Link } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import PageTransition from "../../components/transitions/PageTransition";
import { useEffect } from "react";

const ProjectHub = () => {
  useEffect(() => {
    document.title = "OPP | Project-Hub";
  }, []);
  const images = [];
  projectHubList.map((project) => images.push(project.img));
  return (
    <PageTransition myClass={"project-hub"}>
      <div className="banner">
        <Carrousel images={images} />
      </div>
      <p className="head-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
        justo et nibh venenatis aliquet.Donec quis felis{" "}
      </p>
      <div className="sites">
        {projectHubList.map((project) => (
          <div className="site" key={project.id}>
            <div className="">
              <img src={project.img} alt="" />
              <Link to={`/project/${project.id}`}>{project.title}</Link>
            </div>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default ProjectHub;
