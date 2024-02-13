import { Link } from "react-router-dom";
import PageTransition from "../../components/transitions/PageTransition";
import CardOne from "../../components/cards/CardOne";
import Carrousel from "../../components/Carrousel";
import Report from "../../components/cards/Report";
import Map from "./Map";
import { statusLists, reportsList } from "../../lib/lists";
import banner from "../../assets/home.png";
import rec from "../../assets/rec.png";
import about from "../../assets/home-about.png";
import impl from "../../assets/imp.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "National Oil Palm Project";
  }, []);
  return (
    <PageTransition myClass={"home"}>
      <section className="banner">
        <Carrousel images={[banner, rec, impl]} />
        <div>
          <h1>National Oil Palm Project</h1>
        </div>
      </section>

      <section className="about">
        <h2>Project Background</h2>
        <div className="about-body">
          <img src={about} alt="Home about image" />
          <div>
            <p>
              Oil palm, a lucrative vegetable oil crop in the world, showed
              promising adaptability to some agroecologies in Uganda from
              studies carried out in the 1970s resulting in first commercial
              establishment in 2005 in Bugala Island, Kalangala district.
              Further, adapt- ability studies continue to reveal suitable areas
              for commercial oil palm production in the country. The infant
              industry faces an array of challenges, both biotic and abiotic
              especially in regard to smallholder farmer field management and
              build-up of pests and disease in the face of climate change both
              in the nuclear estate and smallholder farmers&apos; fields.
            </p>
            <Link to="/about" preventScrollReset={false}>
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="implementation">
        <h2>Implementation Status</h2>
        <div className="implementation-body">
          {statusLists.map((status) => (
            <CardOne key={status.id} image={impl} text={status.text} />
          ))}
        </div>
      </section>

      <section className="map">
        <Map />
      </section>

      <section className="reports">
        <h2>Reports</h2>
        <div className="reports-body">
          {reportsList.map((report) => (
            <Report
              key={report.id}
              image={report.icon}
              text={report.text}
              file={report.file}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
