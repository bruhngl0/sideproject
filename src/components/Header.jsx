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
      <h1 className='left-head' onClick={handleButtonClick}>■■■</h1>
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='footer-top'>
      <div className='small-group-menu-top'>Menu:</div>
      <div className='large-group-top'>
        <span>Home</span>
        <span>Seasons</span>
        <span>About</span>
        
      </div>

      <div className='small-group-top'>
        <span>Social Media:</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Github</span>
        <span>Youtube</span>
        
      </div>

      <div className='policy-top'>Privacy Policy and legal terms</div>
      <div className='des-1-top'>designed by bruh</div>
      <div className='des-2-top'>coded by bruh</div>
      </div>
      </div>
      
      <h1 className='right-head'>Reach Out</h1>
    </div>
  );
};

export default React.memo(Header);

