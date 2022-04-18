import './Projects.scss'
import Trails from "../../assets/Waterfall.jpg";
import Tech from "../../assets/tech.jpg";
import Weather from "../../assets/rain.jpg";
import Quiz from "../../assets/KingdonHearts.jpg";
import { Carousel, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <Container className='carousel-size' >
        <Carousel>
          <Carousel.Item>
            <img className="flex w-100 image-size" src={Trails} alt="First slide"/>
            <Carousel.Caption>
              <h3>Trail Buddy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="flex w-100 image-size" src={Quiz} alt="Second slide"/>

            <Carousel.Caption>
              <h3>Kingdom Hearts Quiz</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="flex w-100 image-size" src={Tech} alt="Third slide"/>

            <Carousel.Caption>
              <h3>Tech Blog</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="flex w-100 image-size" src={Weather} alt="Third slide"/>

            <Carousel.Caption>
              <h3>Weather Dashboard</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Projects;
