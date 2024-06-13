import React, { useEffect, useState, useRef } from 'react';
import '../styles/project.scss';
import coverImage from '../../public/cover.png'; // Adjust the path based on your setup

const projects = [
  { id: 1, title: 'LUFFY MONKE', description: 'SEE MORE.', image: 'luffy.png' },
  { id: 2, title: 'NAMI MAMA', description: 'SEE MORE', image: 'nami.png' },
  { id: 3, title: 'RONOROA ZORO', description: 'SEE MORE', image: 'zoro.png' },
  { id: 4, title: 'CHEF SANJI', description: 'SEE MORE', image: 'sanji.png' },
  { id: 5, title: 'DOC CHOP', description: 'SEE MORE.', image: 'chopper.png' },
  { id: 6, title: 'BUGGI PIRATE', description: 'SEE MORE', image: 'buggi.png' },
  { id: 7, title: 'WARRIOR SNAKE', description: 'SEE MORE', image: 'snake.png' },
  { id: 8, title: 'MUSHAI', description: 'SEE MORE', image: 'mushai1.png' },
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
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-card"
        >
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;





