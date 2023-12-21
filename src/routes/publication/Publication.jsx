import Carrousel from "../../components/Carrousel";
import publ from "../../assets/publ.png";
import publication from "../../assets/publication.png";
import { publicationsList } from "../../lib/lists";

const Publication = () => {
  return (
    <div>
      <div className="banner">
        <Carrousel images={[publ]} />
      </div>

      <div className="pub">
        <h2>Publications</h2>
        {publicationsList.map((publication) => (
          <div className="publication" key={publication.id}>
            <img src={publication.img} alt="" />
            <h3>{publication.title}</h3>
            <p>{publication.text}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>

      <div className="slider">
        <Carrousel images={[publication]} />
      </div>

      <div className="news">
        <h3>Better information, better health</h3>
        <h2>News</h2>
      </div>
    </div>
  );
};

export default Publication;
