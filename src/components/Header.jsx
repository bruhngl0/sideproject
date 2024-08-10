import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Gallery', link: '/gallery' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    
  ];

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <div className='header'>
      <h1 className='left-head' onClick={handleButtonClick}>═</h1>
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.link}>{item.name}</a>
        ))}
      </div>
      
      <h1 className='right-head'>Reach</h1>
    </div>
  );
};

export default React.memo(Header);

