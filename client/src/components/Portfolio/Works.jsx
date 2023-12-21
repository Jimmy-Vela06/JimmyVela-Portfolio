import React, { useState } from 'react';
import './portfolio.css';

import threeJs from './assets/threejs.png';
import mern from './assets/mern.png';
import graphql from './assets/graphqlBlack.png';

const projects = [
  {
    id: 1,
    title: 'BounceHouse | DFW',
    imageSite: threeJs,
    description:
      'Bounce House DFW site provides a fun landing page with a 3D bounce house.The application demonstrates Frontend skills using React, TailwindCSS, ThreeJS and FramerMotion. ',
    siteUrl: 'https://bouncehouse-dfw.net/',
    repoUrl: 'https://github.com/Jimmy-Vela06/bounce-house-DFW',
  },
  {
    id: 2,
    title: 'Memoriae',
    imageSite: mern,
    description:
      'The Memoriae App is an application allow you to share memories with others. Once a user creates an account they are allowed to post memories and interact with others by commenting and liking others posts. This application highlights the capabilities of the MERN Fullstack, users will be authenticated by JWT and Google OAuth.',
    siteUrl: 'https://memoriae-mern.net',
    repoUrl: 'https://github.com/Jimmy-Vela06/memories-project-MERN',
  },
  {
    id: 3,
    title: 'Project-Management',
    imageSite: graphql,
    description:
      'The Project Management App is designed to streamline project management and enhance productivity through the use of modern technologies like React, GraphQL, and MongoDB. It offers a user-friendly interface, real-time updates, and flexibility in data retrieval, making it a versatile tool for project teams of all sizes.',
    siteUrl: '/',
    repoUrl: 'https://github.com/Jimmy-Vela06/Project-Management-GraphQL',
  },
];

const Works = () => {
  const [descriptionVisibility, setDescriptionVisibility] = useState(Array(projects.length).fill(false));

  const toggleDescription = (index) => {
    setDescriptionVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !prevVisibility[index];
      return updatedVisibility;
    });
  };

  return (
    <div className='projects-container grid'>
      {projects.map((project, index) => (
        <div key={project.id} className={`project-card ${descriptionVisibility[index] ? 'expanded' : ''}`}>
          <img src={project.imageSite} alt={project.title} className='project-image' />
          <h3 className='project-title'>{project.title}</h3>
          <div className='description__title' onClick={() => toggleDescription(index)} style={{ cursor: 'pointer' }}>
            <h5>Description...</h5>
          </div>
          <p className={`card-description ${descriptionVisibility[index] ? 'show' : 'hide'}`}>{project.description}</p>
          <div className='button-container'>
            <a href={project.siteUrl} target='_blank' rel='noopener noreferrer' className='site-button'>
              Visit Site
            </a>
            <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='repo-button'>
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
