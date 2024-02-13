import { useEffect } from "react";
import pic from "../../assets/rec.png";
import photo from "../../assets/imp.png";
import PageTransition from "../../components/transitions/PageTransition";
const About = () => {
  useEffect(() => {
    document.title = "OPP | About";
  }, []);

  return (
    <PageTransition myClass={"about"}>
      <div className="banner">
        <img src={pic} alt="About banner" />
      </div>

      <div className="first-paragraph">
        <div className="">
          <p>
            Oil palm, a lucrative vegetable oil crop in the world, showed
            promising adaptability to some agroecologies in Uganda from studies
            carried out in the 1970s resulting in first commercial establishment
            in 2005 in Bugala Island, Kalangala district. Further, adapt-
            ability studies continue to reveal suitable areas for commercial oil
            palm production in the country. The infant industry faces an array
            of challenges, both biotic and abiotic especially in regard to
            smallholder farmer field management and build-up of pests and
            disease in the face of climate change both in the nuclear estate and
            smallholder farmers&apos; fields.
          </p>
          <p>
            The rapid build-up of devastating diseases such as Fusarium wilt of
            oil palm and Ganoderma trunk rot in Uganda is an interesting
            scenario since they are often expected from second-phase plantings
            in other areas in the world. However, it may be attributed to the
            all-year-round weather suitability to pests and disease build-up on
            native or alternative hosts in most agroecologies in Uganda. This
            difference from other oil palm producing regions in the world has
            resulted in recently initiated oil palm Research in Uganda to focus
            on developing local solutions to challenges facing oil palm farmers
            in the country.
          </p>
        </div>
        <img src={photo} alt="Desc" />
      </div>

      <div className="second-paragraph">
        <p>
          Global-Palm-Oil-Market-Insights-Trends-Forecast. Asia (Indonesia,
          Malaysia and Thailand) is the largest producer, followed by Africa,
          Americas and Oceania. In Africa, oil palm is grown in 25 countries and
          is mainly supported by corporate investors (Carrere, 2013). Some
          countries have land area under natural oil palm stands in traditional
          plantations while others have oil palm land where negotiations are
          underway or already completed (Carrere, 2013). Nigeria has the largest
          area under natural oil palm stands/traditional plantations followed by
          Democratic Republic of Congo, Guinea and Togo. However, other
          countries like Angola, Burundi, Congo Republic, Equatorial Guinea,
          Ethiopia, Gabon, Gambia, Ghana, Guinea Bissau, Liberia, Madagascar,
          Mozambique, Sao Tome and Principe, Tanzania and Uganda do not have
          estimated figures of land under traditional oil palm cultivation or do
          not have any area under traditional oil palm cultivation but land is
          negotiated or being negotiated for large scale industrial production
          (Carrere, 2013)
        </p>
        <p>
          In Uganda, Oil palm cultivation began in 2005 in Bugala islands. It
          was initiated by Vegetable oil development project (VODP) as an
          innovative public-private-producer-partnership (4P) approach based on
          a vertically integrated processor-nucleus estate smallholder mode
          (NOPP, 2017) and is in the process of being extended to other parts of
          the country including Masaka, Buvuma and Mayuge Districts. Adaptive
          trials are also conducted across the country in areas such as Bugiri,
          Kibaale and Kituza to test the environments for possible future
          expansion of commercial oil palm production. However, Uganda does not
          have a breeding program for oil palm. Therefore, improved oil palm
          varieties mostly hybrids are imported from South-East Asian countries,
          such as Malaysia and Indonesia and West African countries like the
          Ivory Coast and Ghana
        </p>
        <p>
          The Fresh Fruit Bunches (FFBs)are processed into Crude Palm Oil (CPO)
          by Oil Palm Uganda Limited (OPUL) and the company has effective
          Quality Management Systems (QMS) in place to make sure quality CPO is
          produced. Optimum harvesting cycle time and optimum minimum ripeness
          standards are normally established to ensure maximum oil content and
          acceptable levels of free fatty acid (FFA) in FFBs are maintained.
          However, these standards are based on the country from which the
          seedlings are imported, yet the environmental conditions in Uganda are
          quite different from the countries where breeding programs are
          established. During the time of harvesting, in adaptive trials and
          different smallholder farmer blocks, several physiological disorders
          like bunch failure, bunch rot and un-even ripening have been reported
          (NOPP, 2017). These disorders cause high losses in yield worldwide,
          which culminate in great economic loss to oil palm industries
          including those in Uganda.
        </p>
      </div>

      <div className="third-paragraph">
        <p>
          Bunch failure may be caused by some herbicides,
          &apos;overbearing&apos; and poor pollination (Corley and Tinker,
          2016). The incidence of bunch rot is unknown in Uganda. Two fungal
          species have been identified in causing bunch rot disease namely,
          Marasmius palmivorus and Corticium rolfsii with the former being the
          most destructive (Verheye, 2010). Marasmius palmivorus is primarily
          saprophytic on decaying organic matter. It becomes pathogenic in the
          presence of a large mass of dead or decaying organic matter. The
          threshold amount of inoculum necessary to cause disease is however not
          known and according to Aderungboye (1997), the disease is common under
          poor natural pollination. It begins as white strands of the mycelium
          covering the bunch surface which later penetrate the pericarp of the
          fruits causing wet rot of fruits
        </p>
        <img src={photo} alt="Desc" />
      </div>

      <div className="fourth-paragraph">
        <div className="">
          <img src={photo} alt="Desc" />
          <p>
            Affected fruits become soft then turn brown and black in color
            before rotting and drying off. Yield loss is both direct through the
            rotting of bunches and indirect due to quality deterioration.
            Quality loss results from increased free fatty acid content of the
            fruits following infection and untimely harvesting. Improving
            sanitation, ablation, assisted pollination and fungicide application
            have been reported to reduce the adverse effects of this disease
            (Chung, 2011). Information on the occurrence of this disease in oil
            palm in Uganda is scanty. Such information is critical for the
            effective management of the bunch rot disease. Similarly, uneven
            ripening resulting from an imbalance in dry matter allocations
            because bunch sink requirements strongly increase in the last phase
            towards ripening as reported by Henson et al. (2008) is also well
            pronounced in oil palm farms in Uganda.
          </p>
        </div>
        <div className="">
          <img src={photo} alt="" />
          <p>
            This results in the harvesting of half-ripe bunches which leads to
            poor fresh fruit bunch quality and high free fatty acid levels
            affecting oil palm profitability due to the rejection of
            poor-quality fruits at the factory (Woittiez et al., 2017). Bunch
            failure is also believed to be caused by poor natural pollination
            (Aderungboye, 1997) among other causes. However, like bunch rot and
            uneven ripening, the incidence level of bunch failure in Uganda is
            also not known and this curtails management options. Therefore, the
            aim of the study was to determine the incidence of uneven ripening,
            bunch failure and bunch rot and its severity as common physiological
            disorders on oil palm fruits so that effective management options
            can be sought and policy.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
