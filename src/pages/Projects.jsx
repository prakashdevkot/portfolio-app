// src/pages/Projects.jsx
import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    { id: 1, name: 'Real Estate Agent Website', image: project1, description: 'A dynamic website designed for real estate agents, featuring property listings, agent profiles, and an intuitive search system to help users find their ideal home.'  },
    { id: 2, name: 'Automobile Dealership Platform', image: project2, description: 'An engaging platform built for automobile dealerships, showcasing a wide range of vehicles with detailed specs, pricing options, and contact forms for potential buyers.'},
    { id: 3, name: 'Instructor Evaluation Form for Centennial College', image: project3, description: 'An online form designed for students at Centennial College to submit instructor evaluations, ensuring a user-friendly interface for providing feedback and rating course experiences.'  },
  ];
  
  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.name} />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;