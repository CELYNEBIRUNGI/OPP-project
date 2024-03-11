import { useParams, useLocation } from "react-router-dom";
import { projectHubList } from "../../lib/projectHubLists";
import pic from "../../assets/rec.png";
import Carrousel from "../../components/Carrousel";
import PageTransition from "../../components/transitions/PageTransition";
import ScrollBased from "../../components/transitions/ScrollBased";
import { useEffect } from "react";
import MainLoader from "../../components/loaders/MainLoader";
import withLoadingState from "../../components/withLoadingState";

const Information = ({ loader }) => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    let title;
    if (id === "1") {
      title = "Mayuge";
    } else if (id === "2") {
      title = "Masaka";
    } else if (id === "3") {
      title = "Bavuma";
    } else if (id === "4") {
      title = "Kalangala";
    } else {
      title = "Mukono";
    }
    document.title = `Project | ${title}`;
  }, [location.pathname]);

  const project = projectHubList.find((project) => project.id === parseInt(id));
  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <PageTransition myClass={"site-info"}>
      <h2>{project?.title}</h2>
      <div className="carrousel">
        <Carrousel images={[pic]} />
      </div>
      {project.bigText.map((text, index) => (
        <ScrollBased
          key={index}
          start={"1"}
          finish={"1.33"}
          scale={0.9}
          opacity={0.8}
        >
          <p>{text}</p>
        </ScrollBased>
      ))}
    </PageTransition>
  );
};

export default withLoadingState(Information);
