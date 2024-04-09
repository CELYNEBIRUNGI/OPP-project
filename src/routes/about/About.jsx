import { useEffect } from "react";
import one from "../../assets/about/1.jpg";
import two from "../../assets/about/2.png";
import top from "../../assets/about/top.webp";
import PageTransition from "../../components/transitions/PageTransition";
import FadeIn from "../../components/transitions/FadeIn";
import ScrollBased from "../../components/transitions/ScrollBased";
import SecondeParagraph from "./SecondeParagraph";
import FourthParagraph from "./FourthParagraph";
import BlurHashImg from "../../components/BlurHashImage";

const About = () => {
  useEffect(() => {
    document.title = "OPP | About";
  }, []);

  return (
    <PageTransition myClass={"about"}>
      <div className="banner">
        <BlurHashImg
          image={top}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          width={2400}
          height={600}
          alt={"About banner"}
        />
      </div>

      <div className="first-paragraph">
        <FadeIn className={"about-p1"}>
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
        </FadeIn>
        <div className="about-pic">
          <BlurHashImg
            image={one}
            hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
            width={350}
            height={300}
            alt={"about first paragraph image"}
          />
        </div>
      </div>

      <SecondeParagraph />

      <ScrollBased
        className="third-paragraph"
        start={"1"}
        finish={"1.33"}
        scale={0.9}
        opacity={0.8}
      >
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
        <div className="about-third-pic">
          <BlurHashImg
            image={two}
            hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
            width={370}
            height={370}
            alt={"about third paragraph description"}
          />
        </div>
      </ScrollBased>

      <FourthParagraph />
    </PageTransition>
  );
};

export default About;
