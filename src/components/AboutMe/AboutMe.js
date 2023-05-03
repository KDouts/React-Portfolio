import "./AboutMe.scss";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
  return (
    <div id="About-Me"
      style={{
        backgroundColor: "#615D6C",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "50px",
        padding: "50px",
      }}
    >
      <Col>
        <h3 style={{ textAlign: "center", color: "#ACEDFF" }}>About Me</h3>

        <p className="text-center text">
          Hello! My name is Kurtis Doute. I moved from Taylor, Michigan to Kirkland,
          Washington in 2018 to work at Cinemark Theaters as a Theater
          Technology Assistant. Since then I have been a student in studying
          English at Grand Canyon University. During school I completed my
          CompTIA A+ certificate and decided that I wanted to pursue a career in
          the tech field.
        </p>

        <p className="text-center text">
          I have graduated and recieved my certificate in Full Stack Web Development Bootcamp from
          the University of Washington actively looking to find my way in the
          tech field as a software developer. Going into the program I did not know about all of the
          different technologies that were essential to creating and maintaining
          a web application such as: JavaScript, MySQL, MongoDB, React, etc...
        </p>

        <p className="text-center text">
          In my personal life I love to play music! I was a percussionist in
          high school and took on projects to learn other instruments like the
          trumpet, guitar, violin, and saxophone. Otherwise I like to play video
          games and hike with my roommates.
        </p>
      </Col>
    </div>
  );
};

export default AboutMe;
