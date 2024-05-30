// src/Projects.js
import React, { useEffect } from 'react';
import '../styles/project.scss';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.' },
  { id: 2, title: 'Project Two', description: 'Description for project two.' },
  { id: 3, title: 'Project Three', description: 'Description for project three.' },
  { id: 4, title: 'Project Four', description: 'Description for project four.' },
];

const Project = () => {
  useEffect(() => {
    let ticking = false;
    let scrollY = window.scrollY;
    const scrollSpeed = 0.6; // Adjust this value to control the scroll speed (lower is slower)

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newScrollY = window.scrollY;
          const diff = newScrollY - scrollY;
          scrollY += diff * scrollSpeed;
          window.scrollTo(0, scrollY);

          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
              card.classList.add('show');
            } else {
              card.classList.remove('show');
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={project.id} className={`project-card project-${index + 1}`}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
