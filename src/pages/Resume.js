import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import classes from './Resume.module.css';

function Projects() {
    return (
      <div>
      <Navbar />
      <div style={{paddingTop: "3%"}}>
      <a href="/assets/img/resume.pdf" download>
      <button style={{display: "block", background: "#0074D9", color: "white", textAlign: "center", padding: "1% 2%", margin: "auto", textDecoration: "none"}}><i class="fa fa-download"></i> Download</button></a>
      </div>
      <div className={classes.All} style={{width: "80%", height: "1000px", margin: "auto", paddingTop: "2%"}}>
          <img style={{display: "block", textAlign: "center", margin:"auto"}} className={classes.Resume} src="/assets/img/resume.png" alt="resume" />
      </div>
      <Footer />
      </div>
    );
  }
  
  export default Projects;