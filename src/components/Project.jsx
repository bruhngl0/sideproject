import React, { useEffect, useState } from 'react';
import '../styles/project.scss';
import '../../public/cover.png';

const projects = [
  { id: 1, title: 'LUFFY MONKE', description: 'SEE MORE.', image: 'luffy.png' },
  { id: 2, title: 'NAMI MAMA', description: 'SEE MORE', image: 'nami.png' },
  { id: 3, title: 'RONOROA ZORO', description: 'SEE MORE', image: 'zoro.png' },
  { id: 4, title: 'CHEF SANJI', description: 'SEE MORE', image: 'sanji.png' },
  { id: 5, title: 'DOC CHOP', description: 'SEE MORE.', image: 'chopper.png' },
  { id: 6, title: 'BUGGI PIRATE', description: 'SEE MORE', image: 'buggi.png' },
  { id: 7, title: 'WARRIOR SNAKE', description: 'SEE MORE', image: 'snake.png' },
  { id: 8, title: 'MUSHAI', description: 'SEE MORE', image: 'cover.png' },
];

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll('.project-card');
      const visible = [];
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          visible.push(index);
        }
      });
      setVisibleProjects(visible);
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-card project-${index + 1} ${visibleProjects.includes(index) ? 'show' : ''}`}
        >
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

// Debounce function to limit the rate of function calls
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Project;
