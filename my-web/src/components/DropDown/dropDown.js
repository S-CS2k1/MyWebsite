import './dropDown.css';
import './dropDownBreak.css';

const DropDown = ()=>{

    const toHome = ()=>{
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        })
    }

    return(
        <div className="dropdown">
            <ul>
                <li onCLick={toHome}>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default DropDown;