import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Projects() {
    return (
      <div>
      <Navbar />
      <div style={{width: "80%", height: "1000px", margin: "auto"}}>
          <img style={{position: "absolute", width: "220px", height: "280px", marginLeft: "60%", marginTop: "5%", borderRadius: "150px 150px 150px 150px"}} src="/assets/img/maya.png" alt="Mayara" />
          <img style={{height: "100%", margin: "auto"}} src="/assets/img/resume.png" alt="resume" />
      </div>
      <Footer />
      </div>
    );
  }
  
  export default Projects;