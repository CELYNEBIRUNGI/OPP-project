import { Link } from "react-router-dom";
import CardOne from "../../components/cards/CardOne";
import Report from "../../components/cards/Report";
import { statusLists, reportsList } from "../../lib/lists";
import banner from "../../assets/home.png";
import about from "../../assets/home-about.png";
import impl from "../../assets/imp.png";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src={banner} alt="home banner image" />
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
              Over 30,800 vulnerable rural households in Uganda will benefit
              from a US$210.4 million project that aims to sustainably increase
              rural livelihoods by supporting an efficient oil palm industry
              that complies with modern.
            </p>
            <p>
              Over 30,800 vulnerable rural households in Uganda will benefit
              from a US$210.4 million project that aims to sustainably increase
              rural livelihoods by supporting an efficient oil palm industry
              that complies with modern.
            </p>
            <Link to="/about">Read more</Link>
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
        <h2>Map goes here</h2>
      </section>

      <section className="reports">
        <h2>Reports</h2>
        <div className="reports-body">
          {reportsList.map((report) => (
            <Report key={report.id} image={report.icon} text={report.text} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
