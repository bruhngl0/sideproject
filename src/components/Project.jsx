// src/Projects.js
import React, { useEffect } from 'react';
import '../styles/project.scss';
import '../../public/cover.png'

const projects = [
  { id: 1, title: 'VIRTUAL CARDS', description: 'SEE MORE.', image: 'cover.png'},
  { id: 2, title: 'BLOG PLATFORM', description: 'SEE MORE' , image: 'cover.png'},
  { id: 3, title: 'SAAS SERVICE', description: 'SEE MORE' , image: 'cover.png'},
  { id: 4, title: 'INVEST PLATFORM', description: 'SEE MORE' , image: 'cover.png'},
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
          <img src={project.image}/>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
