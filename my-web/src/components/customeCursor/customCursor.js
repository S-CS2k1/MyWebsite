import { useState,useEffect } from 'react';
import './customCursor.css';

const CustomeCursor = ()=>{

    const [x, setX] = useState();
    const [y, setY] = useState();

    document.addEventListener("mousemove",(e)=>{
        setY(e.clientY);
        setX(e.clientX);
    });
    
    useEffect(()=>{
        const pointer = document.querySelector(".circlePointer");
        pointer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },[x, y]);
    

    return(
        <div className="circlePointer"></div>
    );
}

export default CustomeCursor;