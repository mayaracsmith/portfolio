import React from 'react';
import classes from './Footer.module.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, [])
  return(
  <div className={classes.All}>
  <footer className={classes.Footer}>
    <div className={classes.FooterInner}>
    <ul>
        <li>&copy; Mayara Caldeira's Portfolio 2020 | All Rights Reserved.</li>
    </ul>
      <div>
        <a className={classes.SocialIcon} href="https://www.linkedin.com/in/mayara-caldeira-smith-b09465192/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a>
        <a className={classes.SocialIcon} href="https://github.com/mayaracsmith" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-lg"></i></a>

      </div>
    </div>
</footer>
</div>)
    
};


export default Footer;