import Card from "react-bootstrap/Card";
import Trails from "../../assets/Waterfall.jpg";
import Tech from "../../assets/tech.jpg";
import Weather from "../../assets/rain.jpg";
import Quiz from "../../assets/KingdonHearts.jpg";
import { Carousel, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="flex w-100" src={Trails} alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="flex w-100" src={Quiz} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="flex w-100" src={Tech} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Projects;
