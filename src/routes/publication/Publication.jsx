import Carrousel from "../../components/Carrousel";
import publ from "../../assets/publ.png";
import publication from "../../assets/publication.png";
import { publicationsList } from "../../lib/publicationsLists";
import PageTransition from "../../components/transitions/PageTransition";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";

const Publication = ({ loader }) => {
  useEffect(() => {
    document.title = "OPP | Publications";
  }, []);

  if (loader) {
    return (
      <div className="impact">
        <MainLoader />
      </div>
    );
  }

  return (
    <PageTransition myClass={"publication"}>
      <div className="banner">
        <Carrousel images={[publ]} />
      </div>

      <div className="pub">
        <h2>Publications</h2>
        <ul>
          {publicationsList.map((publication) => (
            <li className="publication" key={publication.id}>
              <img src={publication.img} alt="" />
              <h3>{publication.title}</h3>
              <p>{publication.text}</p>
              <NavLink to={`/publication/${publication.id}`}>Read more</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="slider">
        <Carrousel images={[publication, publication]} pagination={true} />
      </div>

      <div className="news">
        <h3>Better information, better health</h3>
        <h2>News</h2>
      </div>
    </PageTransition>
  );
};

export default withLoadingState(Publication);
