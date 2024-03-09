import { impactArticlesList } from "../../lib/impactLists";
import { useParams } from "react-router-dom";

const ImpactDetail = () => {
  const { id } = useParams();
  const impact = impactArticlesList.find(
    (article) => article.id === parseInt(id)
  );
  return (
    <div>
      <h2>{impact?.title}</h2>
      <p>{impact.bigText}</p>
    </div>
  );
};

export default ImpactDetail;
