import art from "../../assets/article-1.png";

const PubCard = ({ article }) => {
  return (
    <div className="pub-card">
      <img src={art} alt="pub-card-image" />
      <div className="pub-card-detail">
        <span>Monday 05, September 20 | By author</span>
        <p>{article.title}</p>
        <a href={article.link} target="_blank">
          art link {article.id}
        </a>
      </div>
    </div>
  );
};

export default PubCard;
