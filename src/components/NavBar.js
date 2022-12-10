import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link> <i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link href="#link"> <i class="fa-solid fa-address-card"></i> About</Nav.Link>
            <NavDropdown title="User">
              <NavDropdown.Item href="#action/3.1"> 
              <i className="fas fa-sign-in-alt"></i> Sign In
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <i className="fas fa-user-plus"></i> Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> 
              <i className="fa-solid fa-user"></i> My Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar