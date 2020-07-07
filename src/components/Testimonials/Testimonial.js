import React from 'react';
import classes from './Testimonial.module.css';
import Card from 'react-bootstrap/Card';


const testimonial = () => (

    <div>
    <div className={classes.Background}>
        <img className={classes.Img} src="/assets/img/danielle.jpeg" alt="Danielle, tech mentor" />
        <div className={classes.Quotes}><i class="fas fa-quote-left"></i></div>
        <div className={classes.Testimonial}><Card style={{background: "none", border: "0"}}><p>I have been incredibly impressed by Maya’s growth and perseverance throughout the Road to Hire Program - 
            she has repeatedly exemplified all of RV’s core values, and has tackled her projects and demonstrates an understanding of application development 
            and design concepts that I didn’t have for at least a full year into my development career. She is exactly the kind of person I’d want on my team! 
            She will succeed wherever she goes.</p>
            <h4 className={classes.Name}>Danielle Moya-Mendez</h4><p>Tech Mentor</p></Card></div>
    </div>
    <div className={classes.Background2}>
    <img className={classes.Img2} src="/assets/img/katie.jpeg" alt="Katie, life mentor" />
    <div className={classes.Quotes2}><i class="fas fa-quote-left"></i></div>
    <div className={classes.Testimonial2}><Card style={{background: "none", border: "0"}}><p>I’ve been amazed by Maya’s ability to quickly learn new languages and execute technical and polished websites. 
        She has retained an abundance of knowledge in a short time frame and has showcased her learnings by applying variety to her coding. She also has an eye for design which has been 
        displayed consistently in her front-end work. She stays true to her style, a style that creates a clear, professional, and user-friendly customer experiences. 
        Not only have I been impressed by her technical abilities, but her self-drive, prioritization and the leadership she has displayed among her peers is outstanding. 
        She is passionate about her work, dedicated to developing her skills and receptive to feedback to continue her growth. Her positivity and confidence regarding challenging 
        tasks is refreshing and makes her a joy to work with. I am confident she would be an asset to any organization. She’s a reliable teammate with a strong work ethic to build on her craft.</p>
        <h4 className={classes.Name2}>Katie Greene Ladika</h4><p>Life Mentor</p></Card></div>

    </div>
    <div className={classes.Background}>
    <img className={classes.Img} src="/assets/img/latori.jpeg" alt="Latori, Road to Hire Instructor" />
    <div className={classes.Quotes}><i class="fas fa-quote-left"></i></div>
    <div className={classes.Testimonial}><Card style={{background: "none", border: "0"}}><p>Maya is a curious, problem-solver who has consistently delivered quality work throughout the Road to Hire Fellowship program. 
        I have enjoyed being her instructor because she has exhibited a genuine passion for technology. She is a quick learner who actively implements new concepts in her 
        code and challenges herself to learn more. Maya is able to work successfully individually or as a part of a team because she is personable, organized and has a
         ‘can-do’ attitude. I know she will do well and be an asset to any team.</p>
         <h4 className={classes.Name}>Latori Miller</h4><p>Tech Instructor</p></Card></div>

    </div>
    </div>
);

export default testimonial;