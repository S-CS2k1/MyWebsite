import { useState, useEffect } from 'react';
import './nav.css';
import './navBreak.css';
import DropDown from '../DropDown/dropDown';

const Nav = ()=>{

    const DDgoUp = (dd, f, s, h, logo, body)=>{
        s.style.width = "20px";
        s.style.transform = "rotate(0)";
        f.style.marginBottom = "-0.2em";
        f.style.transform = "rotate(0)";
        s.style.transformOrigin = "center";
        f.style.transformOrigin = "center";
        dd.style.transform =  "translateY(-100vh)";
        h.style.opacity = "1";
        logo.style.opacity = "1";
        body.style.height = "0";
        body.style.overflow = "visible";
    }

    const DDgoDown = (dd, f, s, h, logo, body)=>{
        s.style.width = "30px";
        f.style.marginBottom = "-10px";
        s.style.transform = "rotate(45deg)";
        s.style.transformOrigin = "center";
        f.style.transform = "rotate(-45deg)";
        f.style.transformOrigin = "center";
        dd.style.transform =  "translateY(0vh)";
        h.style.opacity = "0.1";
        logo.style.opacity = "0.1";
        body.style.height = "100%";
        body.style.overflow = "visible";
    }

    const [counter, setCounter] = useState(1);

    const dropDown = () => {
        setCounter(counter+1)
    }

    useEffect(()=>{
        const dd = document.querySelector(".dropdown");
        const f = document.querySelector(".first");
        const s = document.querySelector(".second");
        const h = document.querySelector(".home");
        const logo = document.querySelector(".logo svg");
        const body = document.querySelector('body');
        if(counter%2 === 0){
            DDgoDown(dd, f, s, h, logo, body);
        }
        if(counter%2 === 1){
            DDgoUp(dd, f, s, h, logo, body);
        }

    },[counter]);

    useEffect(()=>{
        const home = document.querySelector(".dropdown ul li:nth-of-type(1)");
        const about = document.querySelector(".dropdown ul li:nth-of-type(2)");
        const skills = document.querySelector(".dropdown ul li:nth-of-type(3)");
        const contact = document.querySelector(".dropdown ul li:nth-of-type(4)");
        home.addEventListener("click",()=>{
            setCounter(counter+1);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
        about.addEventListener("click",()=>{
            setCounter(counter+1);
            window.scrollTo({
                top: 700,
                behavior: "smooth"
            })
        })
        skills.addEventListener("click",()=>{
            setCounter(counter+1);
            window.scrollTo({
                top: 1400,
                behavior: "smooth"
            })
        })
        contact.addEventListener("click",()=>{
            setCounter(counter+1);
            window.scrollTo({
                top: 2200,
                behavior: "smooth"
            })
        })
    });

    // window.addEventListener("click",()=> {setCounter(counter+1)});

    return(
        <>
        <div className="navbar">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-infinity" viewBox="0 0 16 16">
                    <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
                </svg>
            </div>
            <div className="ham" onClick={dropDown}>
                <span>
                    <div className="first"></div>
                    <div className="second"></div>
                </span>
            </div>
        </div>
        <DropDown />
        </>
    );
}

export default Nav;