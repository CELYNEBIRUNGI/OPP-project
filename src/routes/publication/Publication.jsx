import Carrousel from "../../components/Carrousel";
import publ from "../../assets/publ.png";
import publication from "../../assets/publication.png";
import { publicationsList, pubArtList } from "../../lib/publicationsLists";
import PageTransition from "../../components/transitions/PageTransition";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import withLoadingState from "../../components/withLoadingState";
import MainLoader from "../../components/loaders/MainLoader";
import PropTypes from "prop-types";
import PubCard from "../../components/cards/PubCard";
import PagedPubs from "../../components/PagedPubs";
import BlurHashImg from "../../components/BlurHashImage";

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
              <BlurHashImg
                image={publication.img}
                hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
                width={400}
                height={400}
              />
              {/* <img src={publication.img} alt="" /> */}
              <h3>{publication.title}</h3>
              <p>{publication.text}</p>
              <NavLink to={`/publication/${publication.id}`}>Read more</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="banner">
        <Carrousel images={[publication]} />
        <div>
          <p>
            The National Oil Palm Project (NOPP) was declared effective on
            November 29th, 2018. The Ministry of Agriculture, Animal Industry
            and Fisheries (MAAIF) is the Executing Agency and established a
            Project Management Unit (PMU) in September 2019. NOPP received its
            first disbursement on the 13th of September 2019. The overall goal
            is inclusive rural transformation through oil palm investment. The
            project targets to reach an estimated 30,800 households with an
            outreach of 154,000 beneficiaries of which 30% are women and 40% are
            youth.
          </p>
        </div>
      </div>

      <div className="news">
        <h3>Better information, better health</h3>
        <h2>News</h2>
        <PagedPubs items={pubArtList} itemsPerPage={4} />
      </div>
    </PageTransition>
  );
};

Publication.propTypes = {
  loader: PropTypes.bool,
};

export default withLoadingState(Publication);
