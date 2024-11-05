
import React from 'react';
import './About.css'; 

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="about-title">about me</h2>
        <p className="centered-text">
          I’m a 20-year-old <span className="highlight"> Informatics Engineering student </span> 
          based in Barcelona, passionate about coding and continuous learning. I love diving 
          into various programming languages like <span className="highlight">Python, Java,
          Javascript or C++ </span> and I’m always eager to stay updated on the latest trends in software 
          development.
        </p>
        <p className="centered-text">
          I'm a hackathon enthusiast and an <span className="highlight">organizer at HackUPC</span>,
           currently Logistics Director. I thrive in fast-paced environments where creativity meets collaboration. 
           Participating in hackathons around the world has sharpened my technical skills and 
           enriched my problem-solving abilities. 
        </p>
        <p className="centered-text">
          In my free time, you can find me getting lost in a good book,travelling, or relaxing at
           the beach. Whether I'm coding, organizing events, or exploring new places,
            <span className="highlight"> I’m always looking to grow and connect with others
               in the tech community</span>.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
