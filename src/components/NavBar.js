import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BsTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#ACEDFF" }}>
        <Container>
          <Navbar>Welcome!</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item style={{padding: '10px'}}><BsTelephoneFill></BsTelephoneFill>425.652.9765</Nav.Item>
              <Nav.Item style={{padding: '10px'}}><GoMarkGithub></GoMarkGithub>GitHub.com/KDouts</Nav.Item>
              <Nav.Item style={{padding: '10px'}}><FaLinkedin></FaLinkedin>www.linkedin.com/in/kurtis-doute</Nav.Item>
              <Nav.Item style={{padding: '10px'}}><IoDocumentText></IoDocumentText>www.linkedin.com/in/kurtis-doute</Nav.Item>
              <Nav.Item style={{padding: '10px'}}><MdOutlineAlternateEmail></MdOutlineAlternateEmail>kcd257@yahoo.com</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
