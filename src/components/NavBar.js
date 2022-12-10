import React from 'react'
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link> <i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link> <i className="fa-solid fa-address-card"></i> About</Nav.Link>
            <NavDropdown title="User">
              <NavDropdown.Item> 
              <i className="fas fa-sign-in-alt"></i> Sign In
              </NavDropdown.Item>
              <NavDropdown.Item>
              <i className="fas fa-user-plus"></i> Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
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