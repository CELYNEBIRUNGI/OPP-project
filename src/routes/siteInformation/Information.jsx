import { useParams } from "react-router-dom";
import { projectHubList } from "../../lib/lists";
import pic from "../../assets/rec.png";
const Information = () => {
  const { id } = useParams();
  const project = projectHubList.find((project) => project.id === parseInt(id));

  return (
    <div>
      <h2>{project?.title}</h2>
      <img src={pic} alt="" />
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
      <p>{project?.bigText}</p>
    </div>
  );
};

export default Information;
