import art from "../../assets/articlee.svg";
import BlurHashImg from "../BlurHashImage";

const PubCard = ({ article }) => {
  return (
    <div className="pub-card">
      <div className="pub-card-img">
        <BlurHashImg
          image={art}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          width={400}
          height={400}
        />
      </div>
      <div className="pub-card-detail">
        <p>{article.title}</p>
        <a href={article.link} target="_blank">
          visit link
        </a>
      </div>
    </div>
  );
};

export default PubCard;
