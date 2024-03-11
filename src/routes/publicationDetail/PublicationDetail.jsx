import { publicationsList } from "../../lib/publicationsLists";
import { useParams } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";

const publicationDetail = ({ loader }) => {
  const { id } = useParams();
  const publication = publicationsList.find(
    (article) => article.id === parseInt(id)
  );

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return <div>{publication?.title}</div>;
};

export default withLoadingState(publicationDetail);
