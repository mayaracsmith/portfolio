import React from 'react';
import classes from './Header.module.css';


const header = () => (
    <div className={classes.Background}>
        <div className={classes.Title}>
            <h1>Mayara Caldeira Smith</h1>
            <h3>Software Engineer</h3>
            <p>
            Recent graduate of the Road to Hire program. During the past 6 months, I learned a wide variety of tech languages and professionalism, such as: 
            Front-End/Back-End Development, Responsive Design, GIT and Github, HTML, CSS/SASS, Javascript, Node.js, React, MySQL, Communication, Problem-Solving and Time Management.   
            </p>
        </div>
        <img className={classes.Img} src="/assets/img/Mayara.jpg" alt="Mayara Caldeira" />
    </div>
);

export default header;