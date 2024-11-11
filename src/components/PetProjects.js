import React, { useState, useEffect } from 'react';
import './PetProjects.css'; 
import FlappyBieneImage from '../assets/FlappyBiene.png';

const PetProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const projects = [
    {
      title: 'Flappy Biene',
      description: `"Flappy Biene" is a Python game I developed to enhance my Python programming skills. Inspired by the classic 
       Flappy Bird, I put my own spin on it by incorporating my HackUPC organizer's avatar, my Biene, and adding a space-themed
       twist to align with HackUPC 2024. This project was a great opportunity to practice Python while combining creativity with functionality.`,
      imageUrl: FlappyBieneImage,
      link: 'https://github.com/maariafarelo/FlappyBiene'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'path/to/project2-image.jpg',
      link: 'https://example.com/project2'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: 'path/to/project3-image.jpg',
      link: 'https://example.com/project3'
    },
    // Add more projects here
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Set a timeout to change to the next project if not hovered for 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const timeoutId = setTimeout(() => {
        handleNext();
      }, 5000); // Change after 5 seconds

      // Clean up timeout if hovering
      return () => clearTimeout(timeoutId);
    }
  }, [isHovered]);

  return (
    <div className="pet-projects-slider">
      <h2>some of my pet projects</h2>
      <div className="slider-container">
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="slider-content">
          <div
            className="image-container"
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          >
            <img
              src={projects[currentIndex].imageUrl}
              alt={projects[currentIndex].title}
              className="slider-image"
            />
            <div className="project-info">
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
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
