import React from 'react'
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
        </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to ='/'> <i className="fas fa-home"></i> Home</NavLink>
            <NavLink to ='/about'> <i className="fa-solid fa-address-card"></i> About</NavLink>
            <NavDropdown title="User">
              <NavDropdown.Item to='/signin'> 
              <i className="fas fa-sign-in-alt"></i> Sign In
              </NavDropdown.Item>
              <NavDropdown.Item to='/register'>
              <i className="fas fa-user-plus"></i> Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to='/mypage'>
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