import React from 'react';
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
  <NavLink to ='/posts/create' className={styles.NavIcon}> <i className="far fa-plus-square"></i> Add Post</NavLink>
  )
  const loggedInIcons = <>
  <NavLink to ='/feed' className={styles.NavIcon}> <i className="fas fa-stream"></i> Feed</NavLink>
  <NavLink to ='/liked' className={styles.NavIcon}> <i className="fas fa-heart"></i> Liked</NavLink>
  <NavLink to ='/commented' className={styles.NavIcon}> <i className="fa-regular fa-comment"></i> Commented</NavLink>
  <NavLink to ='/signin' onClick={handleSignOut} className={styles.NavIcon}>
    <i className="fas fa-sign-out-alt"></i> Sign Out</NavLink>
  <NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.NavIcon}>
  <Avatar src={currentUser?.profile_image} text='Your Profile' height={40} className={styles.NavIcon}/>
  </NavLink>
  </>
  const loggedOutIcons = <>
  <NavLink to ='/signin' className={styles.NavIcon}> <i className="fas fa-sign-in-alt"></i> Sign In</NavLink>
  <NavLink to ='/register' className={styles.NavIcon}> <i className="fas fa-user-plus"></i> Register</NavLink>
  </>

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top"
    >
      <Container>
        <NavLink to='/'>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
        </Navbar.Brand></NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} 
            aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to ='/' className={styles.NavIcon}> <i className="fas fa-home"></i> Home</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar