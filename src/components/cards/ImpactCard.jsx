import { NavLink } from "react-router-dom";
import BlurHashImg from "../BlurHashImage";

const ImpactCard = ({ story }) => {
  return (
    <li className="story-card">
      <div className="story-img">
        <BlurHashImg
          image={story.img}
          hash={"LJKKf=TJBq?H~CWBJ7xuAH$P00JR"}
          alt={"Success story image description"}
          width={400}
          height={400}
        />
      </div>
      <div className="story-body">
        <h3>{story.title}</h3>
        <p>{story.body[0]}</p>
        <NavLink to={`/story/${story.id}`}>read more</NavLink>
      </div>
    </li>
  );
};

export default ImpactCard;
