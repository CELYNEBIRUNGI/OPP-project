import { publicationsList } from "../../lib/publicationsLists";
import { useParams } from "react-router-dom";

const publicationDetail = () => {
  const { id } = useParams();
  const publication = publicationsList.find(
    (article) => article.id === parseInt(id)
  );
  return <div>{publication?.title}</div>;
};

export default publicationDetail;
