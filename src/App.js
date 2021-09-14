import React from 'react';
import resume from './images/KavyaResume.pdf';
import kavya from './images/kavya.png'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='headtext'>
        <span className='circle'></span>
        <h2 className='text'>
          {`Kavya Konuganti `}
        </h2>
        <p className='text2'>{`Web Developer`}</p>
      </div>
      <div className='main'>
        <div>
          <img className="kavya" src={kavya} alt="kavya" />
        </div>
        <div className='intro'>
          <h1 className='hello'>{`Hello`}</h1>
          <p>{`I am well organized, creative, and highly motivated technology enthusiast that has experience working with HTML, CSS, JavaScript, MySQL, Node, React and keen to explore more related technologies`}</p>
          <a href={resume} rel="noreferrer" target="_blank"><button className="button">Resume</button></a>
        </div>
      </div>
      <div className='footerend'>
        {`2021 By Kavya`}
      </div>
  </div>
  );
}

export default App;
