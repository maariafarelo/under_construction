import React, { useEffect, useState } from "react";
import profileImage from '../assets/logo.png'; 
import curriculum from '../assets/curriculum.pdf'; 
import './Intro.css'; 

function Intro() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Function to generate stars
    const generateStars = () => {
      let starCount;
      const width = window.innerWidth;

      if (width < 768) {
        starCount = 20; // For small devices
      } else if (width < 1200) {
        starCount = 50; // For medium devices
      } else {
        starCount = 100; // For larger devices
      }

      const starsArray = [];
      for (let i = 0; i < starCount; i++) {
        starsArray.push(
          <div 
            key={i} 
            className="star" 
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              top: `${Math.random() * 100}vh`,  // Random vertical position
            }} 
          />
        );
      }
      setStars(starsArray);
    };

    generateStars(); // Generate stars on initial render

    // Update stars on window resize
    window.addEventListener('resize', generateStars);
    return () => {
      window.removeEventListener('resize', generateStars); // Clean up listener
    };
  }, []);

  return (
    <div className="intro-container">
      {stars} {/* Render stars here */}
      <div className="intro">
        <h2 className="intro-myname">HI! MY NAME IS</h2>
        <h2 className="intro-title">Maria Farelo.</h2>
        <p className="intro-description">Just a creative soul exploring digital horizons.</p>
        <p className="centered-text">
          I'm an Informatics Engineering student based in Barcelona, 
          passionate about learning and an avid hackathon enthusiast.
          I enjoy organizing events that foster innovation and 
          collaboration, and I thrive on the excitement of developing 
          creative solutions under pressure.
        </p>
        <div className="contact-buttons">
          <a href="mailto:maria190504@gmail.com" className="contact-button">Say hi!</a>
          <a href={curriculum} className="cv-button" download>Download CV</a>
        </div>
      </div>
      <img src={profileImage} alt="Maria" className="profile-image" />
    </div>
  );
}

export default Intro;
