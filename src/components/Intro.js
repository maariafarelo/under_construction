import React from "react";
import profileImage from './logo.png'; 

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro">
        <h2 className="intro-title">
          hi, <span className="highlighted-name">Maria</span> here!
        </h2>
        <p className="intro-description">Just a creative soul exploring digital horizons.</p>
        <p className="centered-text">
          I'm an Informatics Engineering student based in Barcelona, 
          passionate about learning and an avid hackathon enthusiast.
          I enjoy organizing events that foster innovation and 
          collaboration, and I thrive on the excitement of developing 
          creative solutions under pressure.
        </p>
        <a href="mailto:maria190504@gmail.com" className="contact-button">
          Say hi!
        </a>
      </div>
      <img src={profileImage} alt="Maria" className="profile-image" /> {/* Image element */}
    </div>
  );
}

export default Intro;
