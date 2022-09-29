
import ProfilePic from "../../assets/Kurtis.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutMe from "../AboutMe/AboutMe.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";

const Profile = () => {
    return (
      <div>
        <Row>
          <Col>
            <Image src={ProfilePic} roundedCircle className="Profile-Image" style={{ margin: '30px' }}/>
            <Projects />
          </Col>
  
          <Col>
            <AboutMe />

            <Contact />
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Profile;