import { publicationsList } from "../../lib/publicationsLists";
import { useParams } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";
import { useState } from "react";

const PublicationDetail = ({ loader }) => {
  const { id } = useParams();
  const publication = publicationsList.find(
    (article) => article.id === parseInt(id)
  );
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <div className="pub-detail">
      {!loaded && (
        <div style={{ textAlign: "center", height: "10vh" }}>
          Loading PDF... Please wait!
        </div>
      )}
      <iframe
        src={publication?.pdf}
        type="application/pdf"
        onLoad={handleLoad}
        className="pdf-embed"
        frameBorder="0"
        // style={{ display: loaded ? "block" : "none" }}
      />
    </div>
  );
};

PublicationDetail.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(PublicationDetail);
