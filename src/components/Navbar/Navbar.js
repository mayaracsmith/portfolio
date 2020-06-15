import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import classes from './Navbar.module.css';
// import { Link } from 'react-router-dom';


const navbar = () => (
    <div className={classes.Background}>
    <Navbar className={classes.Position} collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/">Mayara Caldeira Smith</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/contact">Contact Me!</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
);


export default navbar;