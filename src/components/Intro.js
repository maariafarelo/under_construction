import profileImage from '../assets/logo.png'; 
import curriculum from '../assets/CV.pdf'; 
import React from 'react';
import './Intro.css'; 

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h2 className="intro-myname">hello there 👋🏻, I am</h2>
        <h2 className="intro-title">Maria Farelo.</h2>
        <p className="intro-description">Informatics Engineering Student.</p>
        <div className="contact-buttons">
          <a href="mailto:maria190504@gmail.com" className="contact-button">email me</a>
          <a href={curriculum} className="cv-button" download>find my CV</a>
        </div>
      </div>

      <div className="intro-image">
        <img src={profileImage} alt="Maria" className="profile-image" />
      </div>
    </div>
  );
}

export default Intro;
