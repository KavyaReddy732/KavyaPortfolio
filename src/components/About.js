import React from 'react';
import resumepicture from '../images/resumepicture.jpg';
import resume from '../images/Kavya Resume.pdf';
import './css/home.css';

export default function About() {
    const text =
        "I'm Full Stack Web Developer working with JavaScript,HTML,CSS,NodeJS,MySql,RestApi,MongoDB.Currently working with React Library/FrameWork.Passionate about learning new things and exploring new possibilities."

    return (
        <div className="me" id="About">
            <div className = "picturetext">
            <img className="kavya" src={resumepicture} alt="kavya" />
                <p className="text">{text}</p>
                 <a className="button" href={resume} rel="noreferrer" target="_blank"><button>CV</button></a>
            </div>
        </div>
    )
}
