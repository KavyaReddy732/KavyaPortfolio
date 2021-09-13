import React from 'react';
import resume from './images/Kavyacv.pdf';
import image from './images/bg2.jpg'
// import { BrowserRouter as Router } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
// import About from "./components/About";
// import Home from "./components/Home";
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <img src={image} id="bg" alt="bg"></img>
        <h1 className='text'>
          {`Kavya Konuganti `}
        </h1>
        <p className='text2'>
          {`I'm a web Developer`}
        </p>
        <a className="button" href={resume} rel="noreferrer" target="_blank"><button>CV</button></a>
      </div>
      {/* <Router>
        <div className="bg">
          <nav className="nav_bar">
            <Link smooth to="#Home" className="Navi Name">Kavya Konuganti</Link>
            <span className="right">
          <Link smooth to="#Contact" className="Navi About">Contact</Link>
          <Link smooth to="#Experience" className="Navi Experience">Experience</Link>
              <Link smooth to="#About" className="Navi Contact" >About</Link>
              </span>
          </nav>
        <Home />
      </div>
        <About />
        <Experience />
        <Contact />
        <Footer/> </Router>*/}

  </div>
  );
}

export default App;
