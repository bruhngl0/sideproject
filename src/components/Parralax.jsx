import React, { useEffect, useState } from 'react';


const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="layer-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <h1>First Viewport</h1>
      </div>
      <div className="layer-foreground" style={{ transform: `translateY(${scrollY * 1}px)` }}>
        <h1>Second Viewport</h1>
      </div>
    </div>
  );
};

export default Parallax;