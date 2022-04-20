import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#ACEDFF" }}>
        <Container>
          <Navbar>Welcome!</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <NavDropdown title="Check it out!" id="basic-nav-dropdown">
              <NavDropdown.Item href="#About-Me">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#Projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#Contact">Contact Me!</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
