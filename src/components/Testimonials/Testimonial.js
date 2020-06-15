import React from 'react';
import classes from './Testimonial.module.css';


const testimonial = () => (
    <div>
    <div className={classes.Background}>
        <img className={classes.Img} src="/assets/img/danielle.jpeg" alt="Danielle, tech mentor" />
        <div className={classes.Quotes}><i class="fas fa-quote-left"></i></div>
        <div className={classes.Testimonial}><p>I have been incredibly impressed by Maya’s growth and perseverance throughout the Road to Hire Program - 
            she has repeatedly exemplified all of RV’s core values, and has tackled her projects and demonstrates an understanding of application development 
            and design concepts that I didn’t have for at least a full year into my development career. She is exactly the kind of person I’d want on my team! 
            She will succeed wherever she goes.</p></div>
        <div className={classes.Name}><h4>Danielle Moya-Mendez</h4><p>Tech Mentor</p></div>
    </div>
    <div className={classes.Background}>
    <img className={classes.Img2} src="/assets/img/katie.jpeg" alt="Katie, life mentor" />
    <div className={classes.Quotes2}><i class="fas fa-quote-left"></i></div>
    <div className={classes.Testimonial2}><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p></div>
    <div className={classes.Name2}><h4>Katie Greene Ladika</h4><p>Life Mentor</p></div>


    </div>
    <div className={classes.Background}>
    <img className={classes.Img} src="/assets/img/latori.jpeg" alt="Latori, Road to Hire Instructor" />
    <div className={classes.Quotes}><i class="fas fa-quote-left"></i></div>
    <div className={classes.Testimonial}><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p></div>
    <div className={classes.Name}><h4>Latori Miller</h4><p>Tech Instructor</p></div>

    </div>
    </div>
);

export default testimonial;