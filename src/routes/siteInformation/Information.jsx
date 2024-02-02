import { useParams, useLocation } from "react-router-dom";
import { projectHubList } from "../../lib/lists";
import pic from "../../assets/rec.png";
import Carrousel from "../../components/Carrousel";
import PageTransition from "../../components/transitions/PageTransition";
import { useEffect } from "react";
const Information = () => {
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
    } else {
      title = "Kalangala";
    }
    document.title = `Project | ${title}`;
  }, [location.pathname]);
  const project = projectHubList.find((project) => project.id === parseInt(id));

  return (
    <PageTransition myClass={"site-info"}>
      <h2>{project?.title}</h2>
      <div className="carrousel">
        <Carrousel images={[pic]} />
      </div>
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
    </PageTransition>
  );
};

export default Information;
