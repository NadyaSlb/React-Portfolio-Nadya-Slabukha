import {Container, Nav, Navbar, 
    // NavDropdown
} from 'react-bootstrap';
import "./style.css"

function Navigation({activeTab, changeTab}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#about">Nadya Slabukha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => changeTab("about")} href="#about"
            className={activeTab==="about"? 'activeTab': 'inactive'}
            >About Me</Nav.Link>
            <Nav.Link onClick={() => changeTab("projects")} href="#projects"
            className={activeTab==="projects"? 'activeTab': 'inactive'}
            >Portfolio</Nav.Link>
             <Nav.Link onClick={() => changeTab("contact")} href="#contact"
            className={activeTab==="contact"? 'activeTab': 'inactive'}
            >Contact</Nav.Link>
               <Nav.Link onClick={() => changeTab("resume")} href="#resume"
            className={activeTab==="resume"? 'activeTab': 'inactive'}
            >Resume</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;