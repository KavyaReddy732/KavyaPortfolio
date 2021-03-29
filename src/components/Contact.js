import React from 'react';
import location from '../images/location.png';
import phone from '../images/phone.png';
import email from '../images/email.png';
import './css/contact.css';

export default function Contact() {
    return (
        <div className="contact" id="Contact">
            <div className="Address">
                <img className="locicon" Src={location} alt="loc" />
                <span className="adtext">
                       Værebrovej,<br />
                    2880 Bagsværd,<br />
                    Copenhagen,Denmark.   
                </span>
            </div>
            <div className="phone">
                <div className="ph">
                    <img src={phone} alt="phone" />
                    <span className="num">+45 91401165</span>
                </div>
                <div className="email">
                    <img src={email} alt="email" />
                    <span className="em">kavyareddy.732@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
