import "./Projects.scss";
import Trails from "../../assets/Waterfall.jpg";
import Tech from "../../assets/tech.jpg";
import Weather from "../../assets/rain.jpg";
import Quiz from "../../assets/KingdonHearts.jpg";
import GameRec from "../../assets/game-rec.png";
import Finance from "../../assets/finances.jpg";
import { Image } from "react-bootstrap";

import { Carousel } from "3d-react-carousal";

let slides = [
  <div className="flex w-100 image-size">
    <Image className="flex w-100 image-size" src={GameRec} alt="GameRec" />
    <a href="https://gamrec-project.herokuapp.com/" target="_blank">
      <h3>GameRec</h3>
    </a>
  </div>,

  <div className="flex w-100 image-size">
    <Image className="flex w-100 image-size" src={Trails} alt="Trails API" />
    <a href="https://jonathan6.github.io/Trail-Buddy/" target="_blank">
      <h3>Trail Buddy</h3>
    </a>
  </div>,

  <div className="flex w-100 image-size">
    <Image className="flex w-100 image-size" src={Quiz} alt="KH Quiz" />
    <a href="https://kdouts.github.io/code-quiz/" target="_blank">
      <h3>Kingdom Hearts Quiz</h3>
    </a>
  </div>,

  <div className="flex w-100 image-size">
    <Image className="flex w-100 image-size" src={Tech} alt="Tech Blog" />
    <a href="https://github.com/KDouts/Cool-Tech-Blog" target="_blank">
      <h3>Tech Blog</h3>
    </a>
  </div>,

  <div className="flex w-100 image-size">
    <Image
      className="flex w-100 image-size"
      src={Weather}
      alt="Weather Dashboard"
    />
    <a href="https://kdouts.github.io/weather-API/" target="_blank">
      <h3>Weather Dashboard</h3>
    </a>
  </div>,
  
  <div className="flex w-100 image-size">
    <Image className="flex w-100 image-size" src={Finance} alt="BackPocket" />
    <a
      href="https://github.com/NateWalchenbach/finance-tracker"
      target="_blank"
    >
      <h3>BackPocket</h3>
    </a>
  </div>,
];

const Projects = () => {
  return (
    <div id="Projects">
      <h3 style={{ textAlign: "center" }}>Projects</h3>

      <Carousel slides={slides} autoplay={true} interval={5000} />

    </div>
  );
};

export default Projects;
