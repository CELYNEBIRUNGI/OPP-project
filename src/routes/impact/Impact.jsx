import Carrousel from "../../components/Carrousel";
import Slider from "../../components/Slider";
import withLoadingState from "../../components/withLoadingState";
import PageTransition from "../../components/transitions/PageTransition";
import { impactArticlesList, successStories } from "../../lib/impactLists";
import { sliderList } from "../../lib/lists";
import impact from "../../assets/impact.png";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";
import BlurHashImg from "../../components/BlurHashImage";
import ImpactCard from "../../components/cards/ImpactCard";

const Impact = ({ loader }) => {
  useEffect(() => {
    document.title = "OPP | Impact";
  }, []);

  const topArticles = [...impactArticlesList.slice(-2)];
  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <PageTransition myClass={"impact"}>
      <div className="banner">
        <Carrousel images={[impact]} />
        <div>
          <h2>Changing lives of Ugandans</h2>
        </div>
      </div>

      <div className="articles">
        {topArticles.map((article) => (
          <div className="article" key={article.id}>
            <div className="detail">
              <h2>{article.title}</h2>
              <p>{article.text}</p>
              <NavLink to={`/impact/${article.id}`}>Read more</NavLink>
            </div>
            <div className="impact-art-img">
              <BlurHashImg
                image={article.img}
                hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
                width={400}
                height={400}
                alt={"impact-article description"}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="more">
        <h2>More Impact articles</h2>
        <ul>
          {impactArticlesList?.slice(0, 4).map((article) => (
            <li key={article.id}>
              <div className="more-pic">
                <BlurHashImg
                  image={article.img}
                  hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
                  width={400}
                  height={400}
                  alt={"more articles showcase"}
                />
              </div>
              <h3>{article.title}</h3>
              <NavLink to={`/impact/${article.id}`}>Read more</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="status">
        <h2>Success Stories</h2>
        <p>
          We operate in rapidly evolving sectors, shaping natural and built
          environments
        </p>
        <ul className="stories">
          {successStories.map((story) => (
            <ImpactCard story={story} key={story.id} />
          ))}
        </ul>
      </div>
    </PageTransition>
  );
};

Impact.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(Impact);
