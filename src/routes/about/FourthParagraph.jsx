import ScrollBased from "../../components/transitions/ScrollBased";
import three from "../../assets/about/3.png";
import four from "../../assets/about/4.png";
import BlurHashImg from "../../components/BlurHashImage";

const FourthParagraph = () => {
  return (
    <>
      <ScrollBased
        className="fourth-paragraph"
        start={"1"}
        finish={"1.33"}
        scale={0.9}
        opacity={0.8}
      >
        <div className="">
          <div className="about-fourth-pic">
            <BlurHashImg
              image={three}
              hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
              width={400}
              height={400}
              alt={"about fourth paragraph description"}
            />
          </div>
          {/* <img src={three} alt="Desc" /> */}
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
          <div className="about-fifth-pic">
            <BlurHashImg
              image={four}
              hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
              width={400}
              height={400}
            />
          </div>
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
      </ScrollBased>
    </>
  );
};

export default FourthParagraph;
