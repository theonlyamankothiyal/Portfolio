import React from 'react';
import IMG_2 from "../assets/IMG_2.jpg";
import { Link } from 'react-router-dom';
import "./HeroImgStyles.css";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IMG_2}  alt='IMG_2'/>
        </div>
        <div className='content'>
            <p> HI I'M A SOFTWARE ENGINEER</p>
            <h1>React Devloper.</h1>
        
        <Link to ="/project" className='btn'> Project</Link>
        <Link to ="/contact" className='btn btn-light'> Contact</Link>
        </div>
    </div>
    
  )
}

export default HeroImg