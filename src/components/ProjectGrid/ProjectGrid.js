import React from 'react';
import classes from './ProjectGrid.module.css';
import Nav from 'react-bootstrap/Nav';


const projectGrid = () => (
    <div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Ecommerce Site</h2>
            <p>My first full-stack project. Created with React, Bootstrap, CSS modules and MySQL.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://caldeirascakes.netlify.app/" target="_blank" rel="noopener noreferrer">Caldeira's Cakes</Nav.Link></div>
            <img src="/assets/img/cakes.png" alt="Ecommerce Site"/>
        </div>
        <div className={classes.Cards2}>
        <img src="/assets/img/burgerbuilder.png" alt="Burger Builder"/>
            <div className={classes.Title2}><h2>Burger Builder</h2>
            <p>While I was learning React, I coded-along to a udemy video to create this fun burger builder app.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://mayas-burger-builder.netlify.app/" target="_blank" rel="noopener noreferrer">Burger Builder</Nav.Link></div>
        </div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Gateway Project</h2>
            <p>The first website I ever made. This project was created with HTML and CSS and was built in 4 weeks of learning about the new languages. </p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://gateway-portugal.netlify.app/" target="_blank" rel="noopener noreferrer">Gateway - Portugal</Nav.Link></div>
            <img src="/assets/img/gateway.png" alt="Gateway Project"/>
        </div>
        <div className={classes.Cards2}>
        <img src="/assets/img/hotel.png" alt="Hotel App"/>
            <div className={classes.Title2}><h2>Hotel App</h2>
            <p>Originally started in a class project that later I decided to design it my own way. Project was created with HTML and CSS. This app has its own version in portuguese as well.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://hotelmcs.netlify.app/" target="_blank" rel="noopener noreferrer">Hotel MCS</Nav.Link></div>
        </div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Speech Recognition Guessing Game API</h2>
            <p>This project was created with Node.js, Javascript and API.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://guessingapp.netlify.app/" target="_blank" rel="noopener noreferrer">Guessing Game</Nav.Link></div>
            <img src="/assets/img/guessinggame.png" alt="Guessing Game"/>
        </div>
        <div className={classes.Cards2}>
        <img src="/assets/img/navbar.png" alt="Animated NavBar"/>
            <div className={classes.Title2}><h2>Animated Navigation Bar</h2>
            <p>Project was created with HTML, CSS and Javascript. This animated navbar was part of an in class code along.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://interactive-navbar.netlify.app/" target="_blank" rel="noopener noreferrer">Animated Navbar</Nav.Link></div>
        </div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Pokemon Inquirer App</h2>
            <p>My first full-stack project. Created with React, Bootstrap, CSS modules and MySQL.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="#" target="_blank" rel="noopener noreferrer">Pokemon Inquirer</Nav.Link></div>
            <img src="/assets/img/cakes.png" alt="Pokemon Inquirer App"/>
        </div>
        <div className={classes.Cards2}>
        <img src="/assets/img/cakes.png" alt="Weather App"/>
            <div className={classes.Title2}><h2>Weather App</h2>
            <p>My first full-stack project. Created with React, Bootstrap, CSS modules and MySQL.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="#" target="_blank" rel="noopener noreferrer">Weather App</Nav.Link></div>
        </div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Github Page Locator App</h2>
            <p>My first full-stack project. Created with React, Bootstrap, CSS modules and MySQL.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://react-github-cards-maya.netlify.app/" target="_blank" rel="noopener noreferrer">Github Page Locator</Nav.Link></div>
            <img style={{borderStyle: "solid", borderColor: "#ccc"}} src="/assets/img/githubcards.png" alt="Github Page Locator App"/>
        </div>
        <div className={classes.Cards2}>
        <img src="/assets/img/cakes.png" alt="To - Do List"/>
            <div className={classes.Title2}><h2>To-Do List</h2>
            <p>My first full-stack project. Created with React, Bootstrap, CSS modules and MySQL.</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="#" target="_blank" rel="noopener noreferrer">To-Do List</Nav.Link></div>
        </div>
        <div className={classes.Cards}>
            <div className={classes.Title}><h2>Tic Tac Toe</h2>
            <p>Game created in class with my tech instructor. We used React and .....</p>
            <Nav.Link style={{margin: "0", padding:"0"}} href="https://mayas-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">Tic Tac Toe</Nav.Link></div>
            <img src="/assets/img/tictactoe.png" alt="Tic Tac Toe"/>
        </div>
    </div>
);

export default projectGrid;