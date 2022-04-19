import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown"
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
              <Nav.Item style={{ padding: "5px" }}>
                <BsTelephoneFill></BsTelephoneFill>425.652.9765
              </Nav.Item>
              <Nav.Item style={{ padding: "5px" }}>
                <GoMarkGithub></GoMarkGithub>GitHub.com/KDouts
              </Nav.Item>
              <Nav.Item style={{ padding: "5px" }}>
                <FaLinkedin></FaLinkedin>www.linkedin.com/in/kurtis-doute
              </Nav.Item>
              <Nav.Item style={{ padding: "5px" }}>
                <IoDocumentText></IoDocumentText>
                www.linkedin.com/in/kurtis-doute
              </Nav.Item>
              <Nav.Item style={{ padding: "5px" }}>
                <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
                kcd257@yahoo.com
              </Nav.Item>
            </Nav>
            <NavDropdown title="Check it out!" id="basic-nav-dropdown">
              <NavDropdown.Item href="#About-Me">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#Projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#Contact">Contact Links!</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
