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
          Hello! My name is Kurtis Doute. I am a graduate of the Full Stack Web Development program at the University of Washington. During my schooling I completed my CompTIA A+ certification and decided to pursue a career in software. I am actively looking for a position in software developement or support engineering.
        </p>

        <p className="text-center text">
          I have aquired the skills to create and maintain web applications such as: JavaScript, MySQL, MongoDB, React, etc...
        </p>

      </Col>
    </div>
  );
};

export default AboutMe;
