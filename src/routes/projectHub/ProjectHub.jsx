import { projectHubList } from "../../lib/lists";
import { Link } from "react-router-dom";
import Carrousel from "../../components/Carrousel";

const ProjectHub = () => {
  const images = [];
  projectHubList.map((project) => images.push(project.img));
  return (
    <div className="project-hub">
      <div className="banner">
        <Carrousel images={images} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          justo et nibh venenatis aliquet.Donec quis felis{" "}
        </p>
      </div>
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
    </div>
  );
};

export default ProjectHub;
