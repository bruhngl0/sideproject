import React, { useEffect, useState, useRef } from 'react';
import '../styles/project.scss';
import coverImage from '../../public/cover.png'; // Adjust the path based on your setup

const projects = [
  { id: 1, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to Here is the new, light, and entertaining format of the ', name: 'e-comm', image: 'ripley.jpg', description1:'we live lit', description2: 'test description two', util1: '', util2: ''},
  { id: 2, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'ripley2.jpg', description1:'we live lit', description2: 'test description two', util1: '', util2: ''},
  { id: 3, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'ripley3.jpg', description1:'we live lit', description2: 'test description two', util1: '', util2: ''},
  { id: 4, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'ripley4.jpg', description1:'we live lit', description2: 'test description two', util1: '', util2: ''},
  { id: 5, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'ripley5.jpg', description1:'we live lit', description2: 'test description two', util1: '', util2: ''},
 ,
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
          <h2 className='title'>{project.title}</h2>
          <p className='des'>{project.description}</p>
          <span className='name'>{project.name}</span>
          <img src={project.image} alt={project.title} className='proj-img'/>
          <p className='desc-1'>{project.description1}</p>
          <p className='desc-2'>{project.description2}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;





