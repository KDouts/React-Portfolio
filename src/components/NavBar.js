import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BsTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#ACEDFF" }}>
        <Container>
          <Navbar>Welcome!</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item style={{padding: '20px'}}><BsTelephoneFill></BsTelephoneFill>425.652.9765</Nav.Item>
              <Nav.Item style={{padding: '20px'}}><GoMarkGithub></GoMarkGithub>GitHub.com/KDouts</Nav.Item>
              <Nav.Item style={{padding: '20px'}}><FaLinkedin></FaLinkedin>www.linkedin.com/in/kurtis-doute</Nav.Item>
              <Nav.Item style={{padding: '20px'}}><IoDocumentText></IoDocumentText>www.linkedin.com/in/kurtis-doute</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
