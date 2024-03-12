import { impactArticlesList } from "../../lib/impactLists";
import { useParams } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";

const ImpactDetail = ({ loader }) => {
  const { id } = useParams();
  const impact = impactArticlesList.find(
    (article) => article.id === parseInt(id)
  );

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <div>
      <h2>{impact?.title}</h2>
      <p>{impact.bigText}</p>
    </div>
  );
};

ImpactDetail.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(ImpactDetail);
