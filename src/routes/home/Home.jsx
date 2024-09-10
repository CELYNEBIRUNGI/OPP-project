import { Link } from "react-router-dom";
import PageTransition from "../../components/transitions/PageTransition";
import CardOne from "../../components/cards/CardOne";
import Carrousel from "../../components/Carrousel";
import Report from "../../components/cards/Report";
import Map from "./Map";
import { statusLists, reportsList } from "../../lib/lists";
import banner from "../../assets/pic7.webp";
import rec from "../../assets/rec.png";
import about from "../../assets/home-about.png";
import impl from "../../assets/imp.png";
import { useEffect } from "react";
import BlurHashImg from "../../components/BlurHashImage";

const Home = () => {
  useEffect(() => {
    document.title = "National Oil Palm Project";
  }, []);
  return (
    <PageTransition myClass={"home"}>
      <section className="banner">
        <Carrousel images={[banner, rec]} />
        <div>
          <h1>National Oil Palm Project</h1>
        </div>
      </section>

      <section className="about">
        <h2>Project Background</h2>
        <div className="about-body">
          <div className="about-desc-img">
            <BlurHashImg
              image={about}
              hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
              width={300}
              height={300}
              alt={"about desc at home"}
            />
          </div>
          <div className="about-desc-body">
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
          {statusLists.map((status, index) => (
            <CardOne
              key={status.id}
              image={status.img}
              text={status.text}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="map">
        <Map />
      </section>

      <section className="reports">
        <h2>Reports</h2>
        <div className="reports-body">
          {reportsList.slice(0, 5).map((report) => (
            <Report
              key={report.id}
              image={report.icon}
              text={report.text}
              file={report.file}
            />
          ))}
        </div>
        <Link to={"/reports"} className="reports-page_link">
          View all reports
        </Link>
      </section>
    </PageTransition>
  );
};

export default Home;
