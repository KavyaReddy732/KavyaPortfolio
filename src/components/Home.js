import React from 'react';
import './css/home.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

export default function Home() {
    return (
        <section className="home" id="Home">
            <div className="overlay">
                <h2>
                I'm Full Stack Web Developer
                </h2>
            </div>
            <div className="icons">
                <a href="https://github.com/KavyaReddy732" rel="noreferrer" target="_blank"><img src={github} alt="github" style={{background:"white" }} /></a>
                <a href="https://www.linkedin.com/in/kavyakonuganti/" rel="noreferrer" target="_blank"><img style={{ height:"32px", width:"32px", marginLeft:"30px", borderRadius:"5px",background:"white"}} src={linkedin}  alt="linkedin" /></a>
            </div>
        </section>
    )
}
