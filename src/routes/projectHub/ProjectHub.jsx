import { projectHubList, projBanner } from "../../lib/projectHubLists";
import { Link } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import PageTransition from "../../components/transitions/PageTransition";
import { useEffect } from "react";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";
import BlurHashImg from "../../components/BlurHashImage";

const ProjectHub = ({ loader }) => {
  useEffect(() => {
    document.title = "OPP | Project-Hub";
  }, []);

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <PageTransition myClass={"project-hub"}>
      <div className="banner">
        <Carrousel images={projBanner} />
      </div>
      <p className="head-text">
        NOPP is establishing sustainable commercial partnerships between
        smallholder oil palm growers and a private processor
      </p>
      <div className="sites">
        {projectHubList.map((project) => (
          <div className="site" key={project.id}>
            <div className="">
              <BlurHashImg
                image={project.images[0]}
                hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
                width={400}
                height={400}
                alt={"project hub description"}
              />
              <Link to={`/project/${project.id}`}>{project.title}</Link>
            </div>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

ProjectHub.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(ProjectHub);
