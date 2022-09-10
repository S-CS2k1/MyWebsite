import './skills.css';
import './skillsBreak.css';

const Skills = ()=>{
    return(
        <div className="skills">
            <div className="skillsDescription">
                <span>Skills,</span> <br />
                <span>What I learnt throughout.</span> <br />
                <span>For my projects and more <a href="https://drive.google.com/file/d/1VAwEWpy9hX4yZu9-Kf6Qk1Rr01IAyrKK/view?usp=sharing">My Resume</a></span>
            </div>
            <div className="skillsDisplay">
                <div className="display">
                    <div className="overflow">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Pro</span>
                        <div className="JS">JavaScript</div>
                        <div className="Java">Java</div>
                        <div className="Cpp">C++</div>
                        <div className="Python">Python</div>
                        <div className="CSS">CSS</div>
                        <div className="MDB">MongoDB</div>
                        <div className="mysql">MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;