import babyLogo from './baby.svg';
import schoolLogo from './school.png';
import collegeLogo from './college.png';
import graduationCap from './graduation-cap.png';
import './about.css';
import './aboutBreak.css';

const About = ()=>{
    return(
        <div className="about">
            <div className="aboutHeading">
                <span>About Me,</span> <br />
                <span>I'm rookie developer from India.</span>
            </div>
            <div className="details">
                <div className="baby">
                    <img src={babyLogo} style={{width: "30px", height: "40px"}} alt=""/>
                    <p>Born in spirng 2001 at Davanagere, India</p>
                </div>
                <div className="school">
                    <img src={schoolLogo} style={{width: "30px", height: "40px"}} alt=""/>
                    <p>Schooling from 2003 to 2017 at Venkat International Public School, Bangalore</p>
                </div>
                <div className="intermediate">
                    <img src={collegeLogo} style={{width: "30px", height: "40px"}} alt=""/>
                    <p>Intermediate from 2017 to 2019 at Expert PU College, Mangalore</p>
                </div>
                <div className="university">
                    <img src={graduationCap} style={{width: "30px", height: "40px"}} alt=""/>
                    <p>
                        CSE spec. Information Security from 2019 at VIT Vellore, Graduating on 2023.
                    </p>
                </div>
            </div>
        </div>
    );
} 

export default About;