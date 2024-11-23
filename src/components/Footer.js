import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaCode } from "react-icons/fa";
import "./Footer.css";
import curriculum from '../assets/CV.pdf'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mariafareloiglesias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/maariafarelo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:maria190504@gmail.com">
            <FaEnvelope />
          </a>
          <a href={curriculum}  download>
            <FaFileDownload />
          </a>
          <a href="https://devpost.com/maariafarelo" target="_blank" rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
        <p className="footer-text">© 2024 Maria Farelo Iglesias</p>
      </div>
    </footer>
  );
};

export default Footer;
