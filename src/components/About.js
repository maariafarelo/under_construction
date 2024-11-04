import profileImage from '../assets/logo.png'; 
import curriculum from '../assets/curriculum.pdf'; 
import './About.css'; 

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="about-title">About Me</h2>
        <p className="centered-text">
          I’m a 20-year-old <span className="highlight">Informatics Engineering student </span> 
          based in Barcelona, passionate about coding and continuous learning. I love diving 
          into various programming languages like <span className="highlight">Python</span>,
           <span className="highlight">JavaScript</span>, and <span className="highlight">C++
            </span>, and I’m always eager to stay updated on the latest trends in software 
            development, including web development frameworks, artificial intelligence, and 
            machine learning.
        </p>
        <p className="centered-text">
          As a hackathon enthusiast and <span className="highlight">organizer at HackUPC</span>,
           I thrive in fast-paced environments where creativity meets collaboration. 
           Participating in hackathons around the world has sharpened my technical skills and 
           enriched my problem-solving abilities. I take pride in creating spaces where 
           like-minded individuals can come together and innovate.
        </p>
        <p className="centered-text">
          In my free time, you can find me traveling, getting lost in a good book, or relaxing at
           the beach. Whether I'm coding, organizing events, or exploring new places,
            <span className="highlight"> I’m always looking to grow and connect with others
               in the tech community</span>. My goal is to make a meaningful impact and 
               inspire others to embrace the joy of learning and discovery.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
