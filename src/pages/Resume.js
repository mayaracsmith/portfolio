import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import classes from './Resume.module.css';

function Projects() {
    return (
      <div>
      <Navbar />
      <div className={classes.All} style={{width: "80%", height: "1000px", margin: "auto"}}>
          <img className={classes.Resume} src="/assets/img/resume.png" alt="resume" />
      </div>
      <Footer />
      </div>
    );
  }
  
  export default Projects;