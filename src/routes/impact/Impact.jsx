import Carrousel from "../../components/Carrousel";
import { impactArticlesList } from "../../lib/lists";
const Impact = () => {
  const length = impactArticlesList.length;
  const topArticles = [...impactArticlesList?.slice(-2)];
  return (
    <div>
      <div className="banner">
        <Carrousel />
        <h1>Changing lives of Ugandans</h1>
      </div>
      <div className="articles">
        {topArticles.map((article) => (
          <div className="article" key={article.id}>
            <img src={article.img} alt="" />
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <button>Read more</button>
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

        <h2>Slider goes here</h2>
      </div>
    </div>
  );
};

export default Impact;
