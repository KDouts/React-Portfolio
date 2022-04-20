import "./Projects.scss";
import Trails from "../../assets/Waterfall.jpg";
import Tech from "../../assets/tech.jpg";
import Weather from "../../assets/rain.jpg";
import Quiz from "../../assets/KingdonHearts.jpg";
import GameRec from "../../assets/game-rec.png";
import { Carousel, Container, Image } from "react-bootstrap";

const Projects = () => {
  return (
    <div id="Projects">
      <h3 style={{ textAlign: "center" }}>Projects</h3>

      <Container className="carousel-size">
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="flex w-100 image-size"
              src={GameRec}
              alt="First slide"
              rounded
            />
            <Carousel.Caption>
              <a href="https://jonathan6.github.io/Trail-Buddy/">
                <h3>Game Rec</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="flex w-100 image-size"
              src={Trails}
              alt="First slide"
              rounded
            />
            <Carousel.Caption>
              <a href="https://jonathan6.github.io/Trail-Buddy/">
                <h3>Trail Buddy</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="flex w-100 image-size"
              src={Quiz}
              alt="Second slide"
              rounded
            />

            <Carousel.Caption>
              <a href="https://kdouts.github.io/code-quiz/">
                <h3>Kingdom Hearts Quiz</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="flex w-100 image-size"
              src={Tech}
              alt="Third slide"
              rounded
            />

            <Carousel.Caption>
              <a href="https://github.com/KDouts/Cool-Tech-Blog">
                <h3>Tech Blog</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="flex w-100 image-size"
              src={Weather}
              alt="Third slide"
              rounded
            />

            <Carousel.Caption>
              <a href="https://kdouts.github.io/weather-API/">
                <h3>Weather Dashboard</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Projects;