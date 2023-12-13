import { projectHubList } from "../../lib/lists";
import { Link } from "react-router-dom";
const ProjectHub = () => {
  return (
    <div className="project-hub">
      <div className="banner">
        <img src="" alt="" />
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
