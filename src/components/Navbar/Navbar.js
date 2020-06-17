import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const navbar = () => (
    <div className={classes.Background}>
    <Navbar className={classes.Position} collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><NavLink exact={true} style={{textDecoration: "none", color: "#5c5b5b"}} to="/">Mayara Caldeira Smith</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link><NavLink exact={true} style={{textDecoration: "none", color: "#616161"}} to="/projects">Projects</NavLink></Nav.Link>
      <Nav.Link><NavLink exact={true} style={{textDecoration: "none", color: "#616161"}} to="/resume">Resume</NavLink></Nav.Link>
      <Nav.Link><NavLink exact={true} style={{textDecoration: "none", color: "#616161"}} to="/contact">Contact Me!</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
);


export default navbar;