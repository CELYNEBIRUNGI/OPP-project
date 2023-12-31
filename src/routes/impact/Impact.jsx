import Carrousel from "../../components/Carrousel";
import Slider from "../../components/Slider";
import PageTransition from "../../components/transitions/PageTransition";
import { impactArticlesList } from "../../lib/lists";
import { sliderList } from "../../lib/lists";
import impact from "../../assets/impact.png";

const Impact = () => {
  const topArticles = [...impactArticlesList?.slice(-2)];
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
              <button>Read more</button>
            </div>
            <img src={article.img} alt="" />
          </div>
        ))}
      </div>

      <div className="more">
        <h2>More articles</h2>
        <p></p>
        <ul>
          {impactArticlesList?.slice(0, 4).map((article) => (
            <li key={article.id}>
              <img src={article.img} alt="" />
              <h3>{article.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="status">
        <h2>Status of Implementation</h2>
        <p>
          We operate in rapidly evolving sectors, shaping natural and built
          environments
        </p>
        <Slider images={sliderList} />
      </div>
    </PageTransition>
  );
};

export default Impact;
