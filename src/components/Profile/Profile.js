
import ProfilePic from "../../assets/Kurtis.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
    return (
      <div>
        <Row>
          <Col>
            <Image src={ProfilePic} roundedCircle className="Profile-Image" style={{ margin: '30px' }}/>
          </Col>
  
          <Col>
            <h2 style={{ textAlign: "center", padding: '20px' }}>Kurtis Doute</h2>
            <h3 style={{ textAlign: "center" }}>Full Stack Web Developer</h3>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Profile;