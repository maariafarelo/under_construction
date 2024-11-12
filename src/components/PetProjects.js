import React from 'react';
import './PetProjects.css';
import FlappyBieneImage from '../assets/FlappyBiene.png';
import Bizaway from '../assets/bizamaps.jpeg';
import IFM from '../assets/IFM.png';

const PetProjects = () => {
  const projects = [
    {
      title: 'Flappy Biene',
      description: `"Flappy Biene" is a Python game I developed to improve my programming skills, inspired by the popular Flappy Bird game. The player navigates a bee through obstacles in a challenging, retro-style environment. It’s a fun way to practice coding and game design!`,
      imageUrl: FlappyBieneImage,
      link: 'https://github.com/maariafarelo/FlappyBiene'
    },
    {
      title: 'BizaMaps',
      description: 'BizaMaps is an eco-friendly tool built with Next.js and Flask, aimed at reducing CO2 emissions by suggesting carpooling options. By optimizing travel routes, it helps users make cost-effective and sustainable travel choices, especially suited for corporate environments.',
      imageUrl: Bizaway,
      link: 'https://github.com/maariafarelo/bizaway'
    },
    {
      title: 'HackEps2023',
      description: 'HackEps2023 is a platform where teams can collect and analyze user feedback, using technologies like React and Flask. It transforms feedback into insights, helping developers prioritize tasks and stay focused on high-impact work.',
      imageUrl: IFM,
      link: 'https://github.com/maariafarelo/HackEps2023'
    }
  ];
  

  return (
    <div className="pet-projects">
      <h2>some of my pet projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetProjects;
