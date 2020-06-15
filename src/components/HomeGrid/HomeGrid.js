import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import classes from './HomeGrid.module.css';


const homeGrid = () => (
<CardDeck style={{margin: "auto", paddingTop: "3%"}} className={classes.All}>
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>My Projects</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link href="/projects">Projects</Card.Link>
  </Card.Footer>
  </Card>
  
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>Resume</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link href="/resume">Resume</Card.Link>
  </Card.Footer>
  </Card>
  
  <Card className={classes.Card}>
    <Card.Body>
      <Card.Title>Contact Me!</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Card.Link href="#">Contact Me!</Card.Link>
  </Card.Footer>
  </Card>
  
</CardDeck>
);

export default homeGrid;