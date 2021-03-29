import React from 'react';
import './css/home.css';

export default function Experience() {
    return (
        <div className="eborder" id="Experience">
            <div className="exp">
            <h2 className="title">
                Full Stack Web Developer - Intern
                 <span className="duration">DEC 2020 - Present</span>
            </h2>
            <p className="place">FIZZIT, Copenhagen, Denmark</p>
            <div className="desc">
                Working with the React/CSS. Modification are made on the main Website of Fizzit.Green.Bulit the MSGraph Api and done the integration with NodeJS.
                implemented the layout changes, and the react class components to React Hooks.
            </div>
            <h2 className="title">
                Full Stack Developer Course and Projects
                <span className="duration">June 2020 - March 2021 </span>
            </h2>
            <p className="place">Hack Your Future - Copenhagen</p>
            <div className="desc">
                Worked on JavaScripts and Developed many Apps using JS and the DOM Elements <a className="experi" href="https://github.com/KavyaReddy732/hyf-homework/tree/master/javascript" rel="noreferrer" target="_blank">javascript github Repo</a>
               <br/> One among 10 members who developed rate-my-cv Web application.
            </div>
            <div>
                <ul>
                    <li className="meal">
                        Developed a full stack WebSite 
                        <a className="experi" href="https://restaurant-famous-meal.herokuapp.com/" rel="noreferrer" target="_blank" >  Meal Sharing App </a>
                    </li>
                </ul>
                </div>
        </div>
        </div>
    )
}
