import React, { useState, useEffect, useCallback } from 'react';
import './PetProjects.css'; 
import FlappyBieneImage from '../assets/FlappyBiene.png';
import Bizaway from '../assets/bizamaps.jpeg';
import IFM from '../assets/IFM.png';

const PetProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const projects = [
    {
      title: 'Flappy Biene',
      description: `"Flappy Biene" is a Python game I developed to improve my programming skills, inspired by the popular Flappy Bird game. 
      The game features a space-themed world with my HackUPC2024 avatar, a bee, as the character. It was an excellent way to practice Python 
      while creating an interactive, fun game for players of all ages. This project challenged my logic and creativity, making it an engaging experience.`,
      imageUrl: FlappyBieneImage,
      link: 'https://github.com/maariafarelo/FlappyBiene'
    },
    {
      title: 'Bizaway',
      description: 'Bizaway is a sustainability-driven tool built with Next.js and Flask. It helps reduce CO2 emissions by suggesting carpooling options for employees traveling to the same destination. By optimizing travel routes in real-time, Bizaway ensures that business trips are both cost-effective and environmentally friendly. The project combines technology with eco-conscious solutions to make corporate travel more sustainable.',
      imageUrl: Bizaway,
      link: 'https://github.com/maariafarelo/bizaway'
    },
    {
      title: 'HackEps2023',
      description: 'HackEps2023 is a platform that enables development teams to collect and analyze feedback from users. The application helps teams prioritize and tackle tasks by transforming feedback into actionable insights using technologies like React, Flask, PostgreSQL, and OpenAI API. This project aims to improve workflow efficiency, ensuring developers can stay focused on high-impact work.',
      imageUrl: IFM,
      link: 'https://github.com/maariafarelo/HackEps2023'
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const timeoutId = setTimeout(() => {
        handleNext();
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isHovered, handleNext]);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="pet-projects-slider">
      <h2>Some of My Pet Projects</h2>
      <div className="slider-container">
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="slider-content">
          <div
            className="image-container"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
          >
            <img
              src={projects[currentIndex].imageUrl}
              alt={projects[currentIndex].title}
              className="slider-image"
            />
            <div className="project-info">
              <h3>{projects[currentIndex].title}</h3>
              <p>{isDescriptionVisible ? projects[currentIndex].description : null}</p>
              <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <button className="show-more-button" onClick={toggleDescription}>
                {isDescriptionVisible ? '-' : '+'}
              </button>
            </div>
          </div>
        </div>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PetProjects;
