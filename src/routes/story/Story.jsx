import { successStories } from "../../lib/impactLists";
import { useParams } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";
import Carrousel from "../../components/Carrousel";
import ScrollBased from "../../components/transitions/ScrollBased";

const Story = ({ loader }) => {
  const { id } = useParams();
  const story = successStories.find((story) => story.id === id);

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }
  return (
    <div className="site-info">
      <div className="banner">
        <Carrousel images={[story.img]} />
        <div>
          <h2>{story?.title}</h2>
        </div>
      </div>
      {story.body.map((text, index) => (
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
    </div>
  );
};

export default withLoadingState(Story);
