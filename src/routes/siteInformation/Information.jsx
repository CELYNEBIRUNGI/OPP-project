import { useParams } from "react-router-dom";
import { projectHubList } from "../../lib/lists";
import pic from "../../assets/rec.png";
import Carrousel from "../../components/Carrousel";
import PageTransition from "../../components/transitions/PageTransition";
const Information = () => {
  const { id } = useParams();
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
