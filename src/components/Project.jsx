import React, { useEffect, useState, useRef } from 'react';
import '../styles/project.scss';
import coverImage from '../../public/cover.png'; // Adjust the path based on your setup

const projects = [
  { id: 1, title: '', description: '', image: 'holy.jpg' },
  { id: 2, title: '', description: '', image: 'unn.jpg' },
  { id: 3, title: '', description: '', image: 'oran.jpg' },
  { id: 4, title: '', description: '', image: 'worst1.jpg' },
  { id: 5, title: '', description: '', image: 'tiles.jpg' },
  { id: 6, title: '', description: '', image: 'pig.jpg' },
  { id: 7, title: '', description: '', image: 'hk.jpg' },
  { id: 8, title: '', description: '', image: '' },
]; 

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-card"
        >
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} className='proj-img'/>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;





