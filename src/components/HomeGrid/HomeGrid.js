import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import classes from './HomeGrid.module.css';
import { NavLink } from 'react-router-dom';


const homeGrid = () => (
<CardDeck style={{margin: "auto", paddingTop: "3%"}} className={classes.All}>
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>My Projects</Card.Title>
      <Card.Text>
      Showcasing all the projects I've done throughout my software engineering career in Road to Hire.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link><NavLink exact={true} style={{textDecoration: "none"}} to="/projects">Projects</NavLink></Card.Link>
  </Card.Footer>
  </Card>
  
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>Resume</Card.Title>
      <Card.Text>
      Over the past six months, I’ve gained knowledge about software development as well as developing the necessary skills needed for the position. Check out my resume!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link><NavLink exact={true} style={{textDecoration: "none"}} to="/resume">Resume</NavLink></Card.Link>
  </Card.Footer>
  </Card>
  
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>Contact Me!</Card.Title>
      <Card.Text>
        Do you like my portfolio website? Contact me!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link><NavLink exact={true} style={{textDecoration: "none"}} to="/contact">Contact Me!</NavLink></Card.Link>
  </Card.Footer>
  </Card>
  
</CardDeck>
);

export default homeGrid;