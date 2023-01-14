import React from 'react';
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink to ='/posts/create'> <i className="far fa-plus-square"></i> Add Post</NavLink>
  )
  const loggedInIcons = <>
  <NavLink to ='/feed'> <i className="fas fa-stream"></i> Feed</NavLink>
  <NavLink to ='/liked'> <i className="fas fa-heart"></i> Liked</NavLink>
  <NavLink to ='/commented'> <i className="fas fa-stream"></i> Commented On</NavLink>
  <NavLink to ='/signin' onClick={handleSignOut}>
    <i className="fas fa-sign-out-alt"></i> Sign Out</NavLink>
  <NavLink to={`/profiles/${currentUser?.profile_id}`}>
  <Avatar src={currentUser?.profile_image} text='Profile' height={40}/>
  </NavLink>
  </>
  const loggedOutIcons = <>
  <NavLink to ='/signin'> <i className="fas fa-sign-in-alt"></i> Sign In</NavLink>
  <NavLink to ='/register'> <i className="fas fa-user-plus"></i> Register</NavLink>
  </>

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
        </Navbar.Brand></NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to ='/'> <i className="fas fa-home"></i> Home</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar