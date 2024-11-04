import React from "react";
import profileImage from '../assets/logo.png'; 
import curriculum from '../assets/curriculum.pdf'; 
import './Intro.css'; 

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro">
        <h2 className= "intro-myname">
          HI! MY NAME IS
        </h2>
        <h2 className="intro-title">
           Maria Farelo.
        </h2>
        <p className="intro-description">Just a creative soul exploring digital horizons.</p>
        <p className="centered-text">
          I'm an Informatics Engineering student based in Barcelona, 
          passionate about learning and an avid hackathon enthusiast.
          I enjoy organizing events that foster innovation and 
          collaboration, and I thrive on the excitement of developing 
          creative solutions under pressure.
        </p>
        <div className="contact-buttons">
          <a href="mailto:maria190504@gmail.com" className="contact-button">
            Say hi!
          </a>
          <a href={curriculum} className="cv-button" download>
            Download CV
          </a>
        </div>
      </div>
      <img src={profileImage} alt="Maria" className="profile-image" />
      
      {/* Background circles */}
      <div className="background-circle background-circle-1"></div>
      <div className="background-circle background-circle-2"></div>
      <div className="background-circle background-circle-3"></div>
      <div className="background-circle background-circle-4"></div>
      <div className="background-circle background-circle-5"></div>
      <div className="background-circle background-circle-6"></div>
      <div className="background-circle background-circle-7"></div>
      <div className="background-circle background-circle-8"></div>
      <div className="background-circle background-circle-9"></div>
      <div className="background-circle background-circle-10"></div>
      <div className="background-circle background-circle-11"></div>
      <div className="background-circle background-circle-12"></div>
      <div className="background-circle background-circle-13"></div>
      <div className="background-circle background-circle-14"></div>
      <div className="background-circle background-circle-15"></div>
      <div className="background-circle background-circle-16"></div>
      <div className="background-circle background-circle-17"></div>
      <div className="background-circle background-circle-18"></div>
      <div className="background-circle background-circle-19"></div>
      <div className="background-circle background-circle-20"></div>
    </div>
  );
}

export default Intro;
